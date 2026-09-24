import React from "react";
import FactorDetails from "@/components/templates/p-user/orders/FactorDetails";
import { IPage } from "@/libs/types";
import { getUserOrder } from "@/services/orders.service";
async function Factor({ params }: IPage) {
  const { id } = await params;
  const factor = await getUserOrder({ id });
  return <FactorDetails factor={factor} />;
}

export default Factor;
