"use client";
import { clearCart } from "@/libs/actions/cart.action";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

function DeleteBasket() {
  const [isDeleting, startTransition] = useTransition();
  const removeUserBasket = () => {
    startTransition(async () => {
      const result = await clearCart();
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }
    });
    return true;
  };
  return (
    <button
      onClick={removeUserBasket}
      disabled={isDeleting}
      className="flex items-center justify-center h-[44px] py-2 rounded-md bg-red-600 hover:bg-red-700 text-white mt-4"
    >
      {isDeleting ? (
        <FaSpinner className="animate-spin text-sm md:text-base" />
      ) : (
        " حذف کردن سبد خرید"
      )}
    </button>
  );
}

export default DeleteBasket;
