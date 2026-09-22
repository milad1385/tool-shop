import { getUserCart } from "@/libs/actions/cart.action";
import { getUserAddresses } from "@/services/address.service";
import { getDeliverySlots } from "@/services/delivery.service";
import { notFound } from "next/navigation";
import Checkout from "./Checkout";
import MainBox from "./MainBox";

async function CheckoutDetails() {
  const [{ cart }, userAdresses, slots] = await Promise.all([
    getUserCart(),
    getUserAddresses(),
    getDeliverySlots(),
  ]);

  if (!cart?.items?.length) {
    notFound();
  }
  return (
    <div className="grid grid-cols-12 gap-4">
      <MainBox cart={cart} userAdresses={userAdresses} slots={slots} />
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
