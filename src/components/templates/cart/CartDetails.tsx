import { getUserCart } from "@/libs/actions/cart.action";
import Carts from "./Carts";
import CheckoutBox from "./CheckoutBox";
import EmptyCart from "./EmptyCart";

async function CartDetails() {
  const { cart } = await getUserCart();

  return cart?.items?.length ? (
    <div className="grid grid-cols-12 gap-4">
      <Carts carts={cart} />
      <CheckoutBox
        totalItems={cart.totalItems}
        totalPrice={cart.totalPrice}
        totalDiscount={cart.totalDiscount}
        finalPrice={cart.finalPrice}
      />
    </div>
  ) : (
    <EmptyCart />
  );
}

export default CartDetails;
