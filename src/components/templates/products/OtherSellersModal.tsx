import { FaXmark } from "react-icons/fa6";
import OtherSellerBox from "./OtherSellerBox";
import { IOtherSellersModal } from "@/libs/types";
import { formattedPrice } from "@/utils/helper";

function OtherSellersModal({ isShow, onClose, sellers }: IOtherSellersModal) {
  return (
    <div
      className={`bg-white h-[100%] fixed md:hidden transition-all overflow-y-auto py-5 ${
        isShow ? "bottom-0" : "bottom-[-100%]"
      } z-50 left-0 right-0`}
    >
      <div
        className={`${
          isShow ? "flex" : "hidden"
        } fixed top-0 left-0 right-0 p-5 z-40 bg-white items-center  justify-between border-b-[1.5px] border-b-gray-300`}
      >
        <div className="flex flex-col gap-y-2">
          <h3 className="font-bold text-base text-zinc-700">
            {sellers.length === 1 ? "فروشنده دیگر" : "فروشندگان دیگر"} این کالا
          </h3>
          <h4 className="text-gray-500 font-bold text-[13px]">
            {formattedPrice(sellers.length)} فروشنده
          </h4>
        </div>
        <FaXmark
          className="font-bold text-xl text-zinc-700"
          onClick={() => onClose(false)}
        />
      </div>

      <div className="mt-24 space-y-8 px-4">
        {/* <OtherSellerBox isMain />
        <OtherSellerBox />
        <OtherSellerBox /> */}
        {sellers.map((item) => (
          <OtherSellerBox key={item.seller._id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default OtherSellersModal;
