import FactorDetails from "@/components/templates/p-user/orders/FactorDetails";
import { IPage } from "@/libs/types";
import { getUserOrder } from "@/services/orders.service";
import { notFound } from "next/navigation";
async function Factor({ params }: IPage) {
  const { id } = await params;
  const factor = await getUserOrder({ id });
  if (!factor) {
    notFound();
  }
  return <FactorDetails factor={factor} />;
}

export default Factor;
