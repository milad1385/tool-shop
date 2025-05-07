import Image from "next/image";
import Link from "next/link";
import { HiOutlineTrash } from "react-icons/hi2";

function FavoriteBox() {
  return (
    <div className="bg-white rounded-3xl leading-10 p-4">
      <Link
        href="/products/1"
        className="flex flex-col items-center justify-center"
      >
        <Image
          className="mb-4 w-[200px]"
          src="/images/product-7.jpg"
          alt=""
          width={1920}
          height={1080}
        />
      </Link>
      <div className="text-center">
        <Link href="/products/1">
          <h3 className="font-Lalezar text-base md:text-lg">دستگاه مدل Ingco</h3>
        </Link>
        <div className="flex justify-center gap-4 text-base mt-4">
          <span className="line-through">360.000 تومان</span>
          <span className="text-yellow-500">280.000 تومان</span>
        </div>
        <div className="flex justify-center gap-2 items-center mt-4">
          <button className="bg-yellow-500 px-4 text-white rounded-lg">
            افزودن به سبد خرید
          </button>
          <button className="bg-red-500 p-2 text-white rounded-lg">
            <HiOutlineTrash className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FavoriteBox;
