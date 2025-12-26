import React from "react";
import RegisterTitle from "./RegisterTitle";
import Image from "next/image";
import { HiChevronLeft } from "react-icons/hi";
import SellerStatusBox from "./SellerStatusBox";
import { sellerStatusBoxes } from "@/constants/data";

function SellerStatus() {
  return (
    <div className="flex-[0.8] px-56 py-20">
      <RegisterTitle content="وضعیت خود را انتخاب کنید" />
      <div className="flex items-center gap-x-5 mt-16">
        {sellerStatusBoxes.map((sellerStatusBox) => (
          <SellerStatusBox {...sellerStatusBox} key={sellerStatusBox.id} />
        ))}
      </div>
    </div>
  );
}

export default SellerStatus;
