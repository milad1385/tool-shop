import { IMobileAction } from "@/libs/types";
import { useRouter } from "next/navigation";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegCircleXmark } from "react-icons/fa6";
import FilterByBrand from "./FilterByBrand";
import FilterByCategory from "./FilterByCategory";
import FilterByColor from "./FilterByColor";
import RangeFilter from "./RangeFilter";

function MobileFilterModal({ isShow, onShow }: IMobileAction) {
  const router = useRouter();
  return (
    <div
      className={`bg-white  fixed md:hidden transition-all min-h-screen overflow-y-auto
      z-50 ${isShow ? "top-0" : "top-[800px]"} inset-0 rounded-t-lg`}
    >
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-gray-100 py-4 px-4">
        <div
          className="flex items-center gap-x-1.5"
          onClick={() => onShow(false)}
        >
          <FaRegCircleXmark className="text-xl text-yellow-500" />
          <span className="font-IranMedium text-lg">فیلتر ها</span>
        </div>
        <div className="flex items-center gap-x-2">
          <span
            className="text-red-600"
            onClick={() => {
              onShow(false);
              router.push(`/products`);
            }}
          >
            حذف فیلتر ها
          </span>
          <FaRegTrashAlt className="text-red-600 mb-0.5 " />
        </div>
      </div>

      <div className="mt-14 divide-y-2">
        <RangeFilter />
        <FilterByCategory />
        <FilterByBrand />
        <FilterByColor />
      </div>

      <div className="flex-center">
        <button
          onClick={() => onShow(false)}
          className="w-[70%] text-yellow-600 hover:bg-yellow-500 hover:text-white transition-all  my-4 border border-yellow-500 py-4 rounded-xl"
        >
          اعمال فیلتر
        </button>
      </div>
    </div>
  );
}

export default MobileFilterModal;
