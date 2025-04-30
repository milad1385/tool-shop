import OrderBox from "./OrderBox";

function Orders() {
  return (
    <div className="flex flex-col gap-4">
      <OrderBox />
      <OrderBox />
      <OrderBox />
    </div>
  );
}

export default Orders;
