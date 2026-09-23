import Button from "@/components/ui/Button";
import { IOrdersList } from "@/libs/types";
import Link from "next/link";
import OrderBox from "../../checkout/OrderBox";

function OrdersList({ order }: IOrdersList) {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-5 pb-0">
        {order.items.map((item) => (
          <OrderBox key={item._id} {...item} />
        ))}
      </div>
      <div className="flex items-center gap-x-4 px-5 mt-8 mr-4 md:mx-0">
        <Link href="/factor/1">
          <Button className="!w-[125px] md:!w-[150px]">مشاهده فاکتور</Button>
        </Link>
        <Link href="/p-user/orders/">
          <Button className="!w-[125px] md:!w-[150px] !bg-red-500">
            بازگشت
          </Button>
        </Link>
      </div>
    </>
  );
}

export default OrdersList;
