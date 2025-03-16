import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BsBasket2Fill } from "react-icons/bs";
import { FaHeart, FaTools } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";

function FooterMenu() {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return null;

  const activeStyle =
    "after:size-1.5 after:absolute after:bg-yellow-500 after:rounded-full after:-bottom-1.5 text-gray-700";
  return (
    <section className="pt-14 lg:pt-0">
      <div className="fixed bottom-0 z-30 h-[72.5px] w-full bg-[url('/images/mobile-footer-bg.svg')] bg-cover bg-center bg-no-repeat pb-2 pt-3 lg:hidden shadow-2xl">
        <nav className="container">
          <ul className="flex w-full items-center justify-between gap-2">
            <li className="w-[56px]">
              <Link
                className={`flex flex-col items-center text-[12px] gap-1 relative transition-all ${
                  pathname === "/" ? activeStyle : "text-gray-700/60"
                }`}
                href="/"
              >
                <IoIosHome className="text-xl" />
                <p className="font-bold">خانه</p>
              </Link>
            </li>
            <li className="w-[56px]">
              <Link
                className={`flex flex-col items-center text-[12px] gap-1 relative transition-all ${
                  pathname.includes("/products") ? activeStyle : "text-gray-700/60"
                }`}
                href="/products"
              >
                <FaTools className="text-xl" />
                <p className="font-bold">ابزار ها</p>
              </Link>
            </li>
            <li className="w-[56px]">
              <Link
                className={`flex-col text-[12px] gap-1  transition-all relative -top-9 bg-yellow-500 rounded-full size-14 flex justify-center items-center after:hidden ${
                  pathname.includes("/cart") ? activeStyle : "text-gray-700/60"
                }`}
                href="/cart"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 576 512"
                  color="#fff"
                  height="22"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: "rgb(255, 255, 255)" }}
                >
                  <path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                </svg>
              </Link>
            </li>
            <li className="w-[56px]">
              <Link
                className={`flex flex-col items-center text-[12px] gap-1  relative transition-all ${
                  pathname.includes("/orders")
                    ? activeStyle
                    : "text-gray-700/60"
                }`}
                href="/orders"
              >
                <BsBasket2Fill className="text-xl" />
                <p className="font-bold">سفارشات</p>
              </Link>
            </li>
            <li className="w-[56px]">
              <Link
                className={`flex flex-col items-center text-[12px] gap-1  relative transition-all ${
                  pathname.includes("/favorites")
                    ? activeStyle
                    : "text-gray-700/60"
                }`}
                href="/favorites"
              >
                <FaHeart className="text-xl" />
                <p className="font-bold">علاقه مندی</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default FooterMenu;
