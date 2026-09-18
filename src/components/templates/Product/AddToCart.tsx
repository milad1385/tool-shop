"use client";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/libs/actions/cart.action";
import { IAddToCartProps } from "@/libs/types";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";
import { FaMinus, FaPlus, FaSpinner, FaTrashAlt } from "react-icons/fa";

function AddToCart({
  sellerId,
  productId,
  initialInCart,
  initialQuantity,
  initialItemId,
}: IAddToCartProps) {
  const router = useRouter();
  const [isAdding, startAdding] = useTransition();
  const [isIncreasing, startIncreasing] = useTransition();
  const [isDecreasing, startDecreasing] = useTransition();
  const [isRemoving, startRemoving] = useTransition();

  const [inCart, setInCart] = useState(initialInCart);
  const [quantity, setQuantity] = useState(initialQuantity);
  const [itemId, setItemId] = useState<string>(initialItemId);

  useEffect(() => {
    setInCart(initialInCart);
    setQuantity(initialQuantity);
    setItemId(initialItemId);
  }, [initialInCart, initialQuantity, initialItemId]);

  const addToCartHandler = () => {
    startAdding(async () => {
      try {
        const result = await addToCart(productId, sellerId);

        if (result.success) {
          toast.success(result.message);
          setInCart(true);
          setQuantity(1);

          if (result.cart?.items) {
            const newItem = result.cart.items.find(
              (i: any) =>
                i.product?.toString() === productId &&
                i.seller?.toString() === sellerId,
            );
            if (newItem?._id) {
              setItemId(newItem._id);
            }
          }

          router.refresh();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const handleIncrease = () => {
    if (!itemId) return;

    startIncreasing(async () => {
      try {
        const result = await increaseQuantity(itemId);

        if (result.success) {
          setQuantity((prev) => prev + 1);
          router.refresh();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const handleDecrease = () => {
    if (!itemId) return;

    startDecreasing(async () => {
      try {
        const result = await decreaseQuantity(itemId);

        if (result.success) {
          if (quantity <= 1) {
            setInCart(false);
            setQuantity(0);
            setItemId(undefined);
          } else {
            setQuantity((prev) => prev - 1);
          }
          router.refresh();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const handleRemove = () => {
    if (!itemId) return;

    startRemoving(async () => {
      try {
        const result = await removeFromCart(itemId);

        if (result.success) {
          toast.success(result.message);
          setInCart(false);
          setQuantity(0);
          setItemId(undefined);
          router.refresh();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  if (!inCart) {
    return (
      <button
        onClick={addToCartHandler}
        disabled={isAdding}
        className="px-3 w-full md:w-[180px] py-3 rounded-md font-Iran bg-stone-800 hover:bg-stone-900 text-white mt-6 md:my-6 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
      >
        {isAdding ? (
          <>
            <span>در حال افزودن</span>
            <FaSpinner className="animate-spin" />
          </>
        ) : (
          "افزودن به سبد خرید"
        )}
      </button>
    );
  }

  return (
    <div className="px-3 w-full md:w-[180px] py-2 rounded-md font-Iran bg-stone-800 text-white mt-6 md:my-6 flex items-center justify-between gap-2">
      <button
        type="button"
        onClick={handleIncrease}
        disabled={isIncreasing || isDecreasing || isRemoving}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-500 disabled:hover:shadow-md"
        aria-label="افزایش تعداد"
      >
        {isIncreasing ? (
          <FaSpinner className="animate-spin text-xs" />
        ) : (
          <FaPlus size={12} />
        )}
      </button>

      <span className="text-base font-bold min-w-[24px] text-center font-dana">
        {quantity}
      </span>

      <button
        type="button"
        onClick={quantity === 1 ? handleRemove : handleDecrease}
        disabled={isIncreasing || isDecreasing || isRemoving}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 text-white shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-500 disabled:hover:shadow-md"
        aria-label={quantity === 1 ? "حذف از سبد" : "کاهش تعداد"}
      >
        {isDecreasing || isRemoving ? (
          <FaSpinner className="animate-spin text-xs" />
        ) : quantity === 1 ? (
          <FaTrashAlt size={12} />
        ) : (
          <FaMinus size={12} />
        )}
      </button>
    </div>
  );
}

export default AddToCart;
