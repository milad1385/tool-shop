import Title from "@/components/modules/p-admin/Title";
import { IRecentProducts } from "@/libs/types";
import { LuSquare } from "react-icons/lu";
import EmptyRecentUsersError from "./EmptyRecentError";
import ProductRow from "../products/ProductRow";
import { getAllProducts } from "@/services/products.service";
import { recentProductHeader } from "@/constants/data";

async function RecentProducts({ title, numQuery }: IRecentProducts) {
  const products = await getAllProducts(10, numQuery);
  return (
    <div className="rounded-3xl bg-white py-4 md:py-6 px-3 md:px-6">
      <Title content={title ? title : "محصولات اخیر"} />
      {products.length ? (
        <div className="overflow-x-auto odd:bg-gray-100 max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full  md:mt-5 recent-table text-xs md:text-sm lg:text-base min-w-[450px]">
            <thead className="bg-gray-100">
              <tr className="font-Lalezar text-lg text-zinc-700">
                {recentProductHeader.map((header, index) => (
                  <td key={index + 1} className="px-2 py-2">
                    {header}
                  </td>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <ProductRow key={product._id} index={index + 1} {...product} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyRecentUsersError
          desc="هیچ محصولی تا این تاریخ یافت نشد"
          icon={<LuSquare className="text-2xl md:text-3xl lg:text-[60px]" />}
        />
      )}
    </div>
  );
}

export default RecentProducts;
