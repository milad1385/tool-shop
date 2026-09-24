"use client";
import Button from "@/components/ui/Button";
import { IOrdersList } from "@/libs/types";
import Link from "next/link";
import OrderBox from "../../checkout/OrderBox";
import { continuePayment } from "@/libs/actions/order.action";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";

function OrdersList({ order }: IOrdersList) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleContinuePayment = (orderId: string) => {
    startTransition(async () => {
      try {
        const result = await continuePayment(orderId);

        if (result.success && result.data?.paymentUrl) {
          router.push(result.data.paymentUrl);
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("خطا در ارتباط با سرور");
      }
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 p-5 pb-0">
        {order.items.map((item) => (
          <OrderBox key={item._id} {...item} />
        ))}
      </div>
      <div className="flex items-center gap-x-4 px-5 mt-8 mr-4 md:mx-0">
        {["paid", "shipped", "delivered"].includes(order.status) && (
          <Link href={`/factor/${order._id}`}>
            <Button className="!w-[125px] md:!w-[150px]">مشاهده فاکتور</Button>
          </Link>
        )}
        {order.status === "pending" && (
          <Button
            className="!w-[125px] md:!w-[150px] !bg-green-500 !h-[48px] flex-center"
            onClick={() => handleContinuePayment(order._id)}
          >
            {isPending ? (
              <FaSpinner className="animate-spin" />
            ) : (
              "ادامه پرداخت"
            )}
          </Button>
        )}
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
