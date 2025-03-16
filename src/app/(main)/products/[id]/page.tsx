import { IPage } from "@/libs/types";
import React from "react";

async function page({ params }: IPage) {
  const { id } = await params;
  return <div>{id}</div>;
}

export default page;
