import Title from "@/components/modules/p-admin/Title";
import EmptyRecentUsersError from "./EmptyRecentError";
import { FaBasketShopping } from "react-icons/fa6";
import OrderRow from "./orders/OrderRow";

function RecentOrders() {
  return (
    <div className="rounded-3xl bg-white py-4 md:py-6 px-3 md:px-6">
      <Title content="سفارشات اخیر" />
      {true ? (
        <div className="overflow-x-auto max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full md:mt-5 recent-table text-sm lg:text-base min-w-[600px]">
            <thead className="bg-gray-100">
              <tr className="font-Lalezar text-lg text-zinc-700">
                <td className="px-2 py-2">شماره</td>
                <td className="px-2 py-2">نام</td>
                <td className="px-2 py-2">تاریخ</td>
                <td className="px-2 py-2">قیمت</td>
                <td className="px-2 py-2">شهر</td>
                <td className="px-2 py-2">وضعیت</td>
                <td className="px-2 py-2">رویداد ها</td>
              </tr>
            </thead>
            <tbody>
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
              <OrderRow />
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
