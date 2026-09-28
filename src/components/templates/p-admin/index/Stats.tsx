import StatBox from "@/components/modules/p-user/StatBox";
import { IStats } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuUsers } from "react-icons/lu";

function Stats({
  usersCount,
  ordersCount,
  productsCount,
  sumationOfOrder,
}: IStats) {
  return (
    <div className="grid grid-cols-2  lg:grid-cols-4 gap-5 my-8">
      <StatBox
        title="مقدار فروش"
        icon={
          <FaRegMoneyBillAlt className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-green-500 text-white"
        desc={`${formattedPrice(sumationOfOrder)} تومان`}
      />
      <StatBox
        title="تعداد کاربران"
        icon={<LuUsers className="text-zinc-800 text-xl md:text-3xl" />}
        className="bg-sky-500 text-white"
        desc={`${formattedPrice(usersCount)} نفر`}
      />
      <StatBox
        title="تعداد محصولات"
        icon={
          <AiOutlineProduct className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-red-500 text-white"
        desc={`${formattedPrice(productsCount)} تا`}
      />
      <StatBox
        title="تعداد سفارشات"
        icon={
          <HiOutlineShoppingCart className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-yellow-500 text-white"
        desc={`${formattedPrice(ordersCount)} تا`}
      />
    </div>
  );
}

export default Stats;
