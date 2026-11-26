"use client";

import { useTransition } from "react";
import { LuArrowDownUp } from "react-icons/lu";

import toast from "react-hot-toast";
import {
  addToComparison,
  removeFromComparison,
} from "@/libs/actions/comparison.action";
import { ICompareButton } from "@/libs/types";

export default function CompareBtn({
  productId,
  isInComparison = false,
  className = "",
}: ICompareButton) {
  const [pending, startTransition] = useTransition();

  const handleClick = () => {
    if (pending) return;

    startTransition(async () => {
      const result = isInComparison
        ? await removeFromComparison(productId)
        : await addToComparison(productId);

      if (!result.success) {
        toast.error(result.message);
      } else {
        toast.success(result.message);
      }
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={pending}
      aria-label={isInComparison ? "حذف از مقایسه" : "افزودن به مقایسه"}
      title={isInComparison ? "حذف از مقایسه" : "افزودن به مقایسه"}
      className={`bg-yellow-500 p-3 text-white rounded-lg md:cursor-pointer transition
        hover:bg-yellow-600 disabled:opacity-50 disabled:cursor-not-allowed
        ${isInComparison ? "ring-2 ring-yellow-700" : ""}
        ${className}`}
    >
      <LuArrowDownUp className={`text-2xl ${pending ? "animate-pulse" : ""}`} />
    </button>
  );
}
