import { IGetUserOrders, IUserOrders } from "@/libs/types";
import { getUserOrders } from "@/services/orders.service";
import OrderBox from "./OrderBox";
import EmptyState from "@/components/modules/main/EmptyState";

async function Orders({ status }: IGetUserOrders) {
  const orders = await getUserOrders({ status });

  return (
    <div className="flex flex-col gap-4">
      {orders.length ? (
        orders.map((order) => <OrderBox key={order._id} {...order} />)
      ) : (
        <EmptyState description="موردی برای نمایش سفارش ها یافت نشد" title="سفارشی یافت نشد" />
      )}
    </div>
  );
}

export default Orders;
