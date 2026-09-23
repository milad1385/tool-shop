import { IGetUserOrders, IUserOrders } from "@/libs/types";
import { getUserOrders } from "@/services/orders.service";
import OrderBox from "./OrderBox";

async function Orders({ status }: IGetUserOrders) {
  const orders = await getUserOrders({ status });

  return (
    <div className="flex flex-col gap-4">
      {orders.map((order) => (
        <OrderBox key={order._id} {...order} />
      ))}
    </div>
  );
}

export default Orders;
