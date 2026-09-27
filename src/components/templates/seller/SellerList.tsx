import Pagination from "@/components/modules/main/Pagination";
import SellerBox from "./SellerBox";
import { ISellerList } from "@/libs/types";

function SellerList({ data, pagination } : ISellerList) {
  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((seller) => (
          <SellerBox key={seller._id} {...seller} />
        ))}
      </div>
      <Pagination count={pagination.totalPages} />
    </div>
  );
}

export default SellerList;
