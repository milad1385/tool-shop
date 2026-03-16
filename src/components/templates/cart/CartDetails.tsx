import Carts from "./Carts";
import CheckoutBox from "./CheckoutBox";
import EmptyCart from "./EmptyCart";

function CartDetails() {
  return false ? (
    <div className="grid grid-cols-12 gap-4">
      <Carts />
      <CheckoutBox />
    </div>
  ) : (
    <EmptyCart/>
  );
}

export default CartDetails;
