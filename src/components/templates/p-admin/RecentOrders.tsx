import Title from "@/components/modules/p-admin/Title";
import EmptyRecentUsersError from "./EmptyRecentError";
import { FaBasketShopping } from "react-icons/fa6";
import OrderRow from "./OrderRow";

function RecentOrders() {
  return (
    <div className="rounded-3xl bg-white  py-4 md:py-6 px-3 md:px-6">
      <Title content="سفارشات اخیر" />
      {true ? (
        <div className="overflow-hidden max-h-[225px] md:max-h-[250px] overflow-y-auto table-container">
          <table className="w-full mt-5 recent-table text-xs md:text-sm lg:text-base">
            <thead>
              <tr className="font-Lalezar text-lg text-zinc-700">
                <td>شماره</td>
                <td>نام</td>
                <td>تاریخ</td>
                <td>قیمت</td>
                <td>وضعیت</td>
                <td>رویداد ها</td>
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
