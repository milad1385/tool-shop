import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function EmptyCart() {
  return (
    <div className="flex items-center justify-center flex-col gap-6 bg-white rounded-2xl py-8">
      <HiOutlineShoppingCart className="text-[100px] text-zinc-800" />
      <h2 className="text-2xl font-Lalezar text-zinc-700">
        سبد خرید خالی می باشد.
      </h2>
      <Link href="/products">
        <Button>بازگشت به فروشگاه</Button>
      </Link>
    </div>
  );
}

export default EmptyCart;
