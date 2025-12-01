import { sellers } from "@/constants/data";
import React from "react";
import SellerBox from "./SellerBox";
import Pagination from "@/components/modules/main/Pagination";

function SellerList() {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sellers.map((seller) => (
          <SellerBox key={seller.id} {...seller} />
        ))}
      </div>
      <Pagination count={3} />
    </div>
  );
}

export default SellerList;
