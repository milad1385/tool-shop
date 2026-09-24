import { getUserPanelStats } from "@/services/users.service";
import { formattedPrice } from "@/utils/helper";
import { AiOutlineProduct } from "react-icons/ai";
import { CgSandClock } from "react-icons/cg";
import { TbBasketPause } from "react-icons/tb";
import StatBox from "../../../modules/p-user/StatBox";

async function Stats() {
  const { paidCount, pendingCount, cancelledCount } = await getUserPanelStats();
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
      <StatBox
        title={`${pendingCount} محصول`}
        icon={
          <AiOutlineProduct className="text-zinc-800 text-xl md:text-3xl" />
        }
        className="bg-yellow-500 text-white"
        desc="در انتظار پرداخت"
      />
      <StatBox
        title={`${paidCount} محصول`}
        icon={<CgSandClock className="text-zinc-800 text-xl md:text-3xl" />}
        desc="خریداری شده"
        className="bg-black text-white"
      />
      <StatBox
        title={`${cancelledCount} محصول`}
        icon={<TbBasketPause className="text-zinc-800 text-xl md:text-3xl" />}
        desc="لغو شده"
        className="bg-red-600 text-white"
      />
      <StatBox
        title={`${formattedPrice(4200000)}`}
        icon={<TbBasketPause className="text-zinc-800 text-xl md:text-3xl" />}
        desc="مجموع خرید"
        className="block lg:hidden bg-green-600 text-white"
      />
    </div>
  );
}

export default Stats;
