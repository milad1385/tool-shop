import Title from "@/components/modules/p-admin/Title";
import EmptyRecentUsersError from "./EmptyRecentError";
import { FaBasketShopping } from "react-icons/fa6";
import OrderRow from "../orders/OrderRow";
import { getAllOrders } from "@/services/orders.service";
import LatestOrderItem from "../orders/LatestOrderItem";
import { recentOrderHeader } from "@/constants/data";

async function RecentOrders() {
  const { data } = await getAllOrders({});
  return (
    <div className="rounded-3xl bg-white py-4 md:py-6 px-3 md:px-6">
      <Title content="سفارشات اخیر" />
      {true ? (
        <div className="overflow-x-auto max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full md:mt-5 recent-table text-sm lg:text-base min-w-[600px]">
            <thead className="bg-gray-100">
              <tr className="font-Lalezar text-lg text-zinc-700">
                {recentOrderHeader.map((header, index) => (
                  <td className="p-2" key={index + 1}>{header}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((order, index) => (
                <LatestOrderItem {...order} index={index + 1} key={order._id} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <EmptyRecentUsersError
          desc="هیچ سفارشی یافت نشد"
          icon={
            <FaBasketShopping className="text-2xl md:text-3xl lg:text-[60px]" />
          }
        />
      )}
    </div>
  );
}

export default RecentOrders;
