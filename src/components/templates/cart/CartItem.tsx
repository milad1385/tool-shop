"use client";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/libs/actions/cart.action";
import { ICartItem } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import toast from "react-hot-toast";
import { FaSpinner, FaTrashAlt } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { HiMinus, HiPlus } from "react-icons/hi2";

function CartItem({
  _id,
  quantity: initialQuantity,
  discount,
  product,
  seller,
  price,
  finalPrice,
}: ICartItem) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isIncreasing, startIncreasing] = useTransition();
  const [isDecreasing, startDecreasing] = useTransition();
  const [isRemoving, startRemoving] = useTransition();

  const isPending = isIncreasing || isDecreasing || isRemoving;

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrease = () => {
    startIncreasing(async () => {
      try {
        const result = await increaseQuantity(_id);

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
    startDecreasing(async () => {
      try {
        const result = await decreaseQuantity(_id);

        if (result.success) {
          if (quantity <= 1) {
            router.refresh();
          } else {
            setQuantity((prev) => prev - 1);
            router.refresh();
          }
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  const handleRemove = () => {
    startRemoving(async () => {
      try {
        const result = await removeFromCart(_id);

        if (result.success) {
          toast.success(result.message);
          router.refresh();
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  return (
    <div className="bg-white overflow-hidden relative rounded-3xl p-4 flex flex-col md:flex-row items-center justify-center mb-4 gap-y-6 gap-x-14">
      <Link href={`/products/${product.slug}`}>
        <Image
          className="w-32 border rounded-2xl"
          src={product.images[0]}
          alt={product.name}
          width={1920}
          height={1080}
        />
      </Link>

      {discount > 0 && (
        <div className="absolute left-0 top-0 bg-yellow-500 w-16 py-2 flex-center text-gray-50 rounded-br-md">
          {discount}%
        </div>
      )}

      <div className="leading-10 flex flex-col md:block gap-y-3 space-y-3">
        <Link
          href={`/products/${product.slug}`}
          className="font-Lalezar text-lg md:text-xl line-clamp-1"
        >
          {product.name.slice(0, 20)}
        </Link>
        <Link
          href={`/category/${product.category.href}`}
          className="block text-center md:text-right text-zinc-700 text-sm md:text-base"
        >
          دسته بندی: {product.category.name}
        </Link>
        <Link
          href={`/seller/1`}
          className="flex items-center justify-center md:justify-start gap-x-2 text-center md:text-right text-zinc-700 text-xs md:text-sm"
        >
          <FaShop className="text-base md:text-lg text-yellow-500" />
          {seller.name}
        </Link>
      </div>

      <div
        className={`flex gap-4 text-base mt-4 ${
          discount > 0 ? "" : "min-w-[233px] flex-center"
        }`}
      >
        {discount > 0 && (
          <span className="line-through text-zinc-400">
            {formattedPrice(finalPrice)} تومان
          </span>
        )}
        <span
          className={
            discount > 0
              ? "text-yellow-500 font-bold"
              : "text-zinc-800 font-bold"
          }
        >
          {formattedPrice(price)} تومان
        </span>
      </div>

      <div>
        <div className="number flex items-center">
          <button
            type="button"
            onClick={handleIncrease}
            disabled={isPending}
            className="bg-yellow-500 text-white size-12 rounded-full flex-center hover:bg-yellow-600 active:bg-yellow-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="افزایش تعداد"
          >
            {isIncreasing ? (
              <FaSpinner className="animate-spin text-sm" />
            ) : (
              <HiPlus className="text-white text-lg" />
            )}
          </button>

          <span className="minus p-4 font-bold w-[95px]">
            تعداد : {quantity}
          </span>

          <button
            type="button"
            onClick={quantity === 1 ? handleRemove : handleDecrease}
            disabled={isPending}
            className="bg-black text-white size-12 rounded-full flex-center hover:bg-zinc-800 active:bg-zinc-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={quantity === 1 ? "حذف از سبد" : "کاهش تعداد"}
          >
            {isDecreasing || isRemoving ? (
              <FaSpinner className="animate-spin text-sm" />
            ) : quantity === 1 ? (
              <FaTrashAlt className="text-white text-base" />
            ) : (
              <HiMinus className="text-white text-lg" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
