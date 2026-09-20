import { auth } from "@/auth";
import NavbarClient from "./NavbarClient";
import { getUserCart } from "@/libs/actions/cart.action";

async function Navbar() {
  const session = await auth();

  let cartCount = 0;
  if (session?.user?.id) {
    const result = await getUserCart();
    cartCount = result.cart.totalItems || 0;
  }

  return <NavbarClient cartCount={cartCount} />;
}

export default Navbar;
