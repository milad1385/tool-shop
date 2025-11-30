"use client";
import Modal from "@/components/modules/main/Modal";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaShop } from "react-icons/fa6";
import SellerInfoBox from "./SellerInfoBox";

function SellerInfo() {
  return (
    <div className="bg-white relative rounded-2xl flex flex-col gap-y-5 md:flex-row items-center justify-between px-7 py-6">
      <div className="flex items-center gap-x-6">
        <div className="border border-gray-300 p-3 rounded-xl">
          <FaShop className="text-zinc-700 text-xl md:text-3xl" />
        </div>
        <div className="space-y-2">
          <h1 className="text-sm md:text-lg font-bold">
            اسمارت فروشگاه ابزارینو
          </h1>
          <p className="text-xs md:text-sm text-gray-500">5 سال و 10 ماه</p>
        </div>
      </div>

      <Modal>
        <Modal.Open name="detail">
          <AiOutlineInfoCircle className="block md:hidden text-xl md:text-2xl text-gray-400 absolute top-5 left-5" />
        </Modal.Open>
        <Modal.Page name="detail">
          <SellerInfoBox />
        </Modal.Page>
      </Modal>
      <div className="flex items-center gap-x-12">
        <div className="w-[1.5px] h-[70px] bg-gray-300 hidden md:block"></div>
        <div className="flex flex-col items-center gap-y-2">
          <span className="text-lg md:text-xl text-green-600 font-bold">
            % 88
          </span>
          <p className="text-zinc-600 text-sm md:text-base">رضایت از کالا ها</p>
        </div>
        <div className="w-[1.5px] h-[70px] bg-gray-300"></div>
        <div className="flex flex-col items-center gap-y-2">
          <span className="text-lg md:text-xl text-green-600 font-bold">
            عالی
          </span>
          <p className="text-zinc-600 text-sm md:text-base">عملکرد فروشنده</p>
        </div>
        <div className="w-[1px] h-[70px] bg-gray-300 hidden md:block"></div>
        <div className="hidden md:flex flex-col items-center gap-y-2">
          <Modal>
            <Modal.Open name="detail">
              <span className="cursor-pointer">
                <AiOutlineInfoCircle className="text-lg md:text-2xl text-gray-400" />
              </span>
            </Modal.Open>
            <Modal.Page name="detail">
              <SellerInfoBox />
            </Modal.Page>
          </Modal>
          <p className="text-zinc-600 text-sm md:text-base">جزییات بیشتر</p>
        </div>
      </div>
    </div>
  );
}

export default SellerInfo;
