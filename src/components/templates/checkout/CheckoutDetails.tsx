import { getUserCart } from "@/libs/actions/cart.action";
import { notFound } from "next/navigation";
import Checkout from "./Checkout";
import MainBox from "./MainBox";

async function CheckoutDetails() {
  const { cart } = await getUserCart();
  if (!cart?.items?.length) {
    notFound();
  }
  return (
    <div className="grid grid-cols-12 gap-4">
      <MainBox cart={cart} />
      <Checkout
        totalItems={cart.totalItems}
        totalPrice={cart.totalPrice}
        totalDiscount={cart.totalDiscount}
        finalPrice={cart.finalPrice}
      />
    </div>
  );
}

export default CheckoutDetails;
