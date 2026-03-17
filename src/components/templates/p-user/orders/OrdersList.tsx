import React from "react";
import OrderItem from "../../checkout/OrderItem";
import Button from "@/components/ui/Button";
import Link from "next/link";

function OrdersList() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-5 pb-0">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
      <div className="flex items-center gap-x-4 px-5 mt-8">
        <Link href="/factor/1">
          <Button className="!w-[150px]">مشاهده فاکتور</Button>
        </Link>
        <Link href="/p-user/orders/">
          <Button className="!w-[150px] !bg-red-500">بازگشت</Button>
        </Link>
      </div>
    </>
  );
}

export default OrdersList;
