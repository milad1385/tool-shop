import { HiOutlineDocumentDownload } from "react-icons/hi";
import {
  HiOutlineChevronRight,
  HiOutlineCreditCard,
  HiOutlineFaceSmile,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";
import { LiaComments } from "react-icons/lia";
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { FaHeart, FaTools } from "react-icons/fa";
import { BsBasket2Fill } from "react-icons/bs";
import { AiOutlineProduct } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { GoCommentDiscussion, GoGift } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { RiArticleLine } from "react-icons/ri";
import { MdOutlineCategory } from "react-icons/md";

export const priority = [
  { id: 1, value: 1, label: "بسیار بالا" },
  { id: 2, value: 2, label: "بالا" },
  { id: 3, value: 3, label: "متوسط" },
];

export const departments = [
  { id: 1, value: 1, label: "مالی" },
  { id: 2, value: 2, label: "پشتیبانی" },
  { id: 3, value: 3, label: "رسیدگی" },
];

export const links = [
  {
    id: 1,
    title: "پیشخوان",
    icon: <HiOutlineSquares2X2 className="text-2xl" />,
    href: "/p-user",
  },
  {
    id: 2,
    title: "سفارش ها",
    icon: <HiOutlineCreditCard className="text-2xl" />,
    href: "/p-user/orders",
  },
  {
    id: 3,
    title: "لیست علاقه مندی",
    icon: <HiOutlineFaceSmile className="text-2xl" />,
    href: "/p-user/favorites",
  },
  {
    id: 4,
    title: "نظرات",
    icon: <LiaComments className="text-2xl" />,
    href: "/p-user/comments",
  },
  {
    id: 44,
    title: "تیکت ها",
    icon: <IoTicketOutline className="text-2xl" />,
    href: "/p-user/tickets",
  },
  {
    id: 5,
    title: "دانلود ها",
    icon: <HiOutlineDocumentDownload className="text-2xl" />,
    href: "/p-user/downloads",
  },
  {
    id: 6,
    title: "جزییات حساب کاربری",
    icon: <HiOutlineUser className="text-2xl" />,
    href: "/p-user/information",
  },
];

export const adminPanelLinks = [
  {
    id: 1,
    title: "صفحه اصلی",
    href: "/p-admin",
    icon: <IoHomeOutline className="text-2xl" />,
  },
  {
    id: 2,
    title: "محصولات",
    href: "/p-admin/products",
    icon: <AiOutlineProduct className="text-2xl" />,
  },
  {
    id: 3,
    title: "کاربران",
    href: "/p-admin/products",
    icon: <LuUsers className="text-2xl" />,
  },
  {
    id: 4,
    title: "کامنت ها",
    href: "/p-admin/comments",
    icon: <GoCommentDiscussion className="text-2xl" />,
  },
  {
    id: 5,
    title: "تیکت ها",
    href: "/p-admin/tickets",
    icon: <IoTicketOutline className="text-2xl" />,
  },
  {
    id: 6,
    title: "سفارشات",
    href: "/p-admin/orders",
    icon: <FiShoppingCart className="text-2xl" />,
  },
  {
    id: 7,
    title: "مقاله ها",
    href: "/p-admin/articles",
    icon: <RiArticleLine className="text-2xl" />,
  },
  {
    id: 8,
    title: "دسته بندی ها",
    href: "/p-admin/categories",
    icon: <MdOutlineCategory className="text-2xl" />,
  },
  {
    id: 9,
    title: "کد تخفیف",
    href: "/p-admins/discount",
    icon: <GoGift className="text-2xl" />,
  },
  {
    id: 10,
    title: "تنظیمات",
    href: "/p-admin/settings",
    icon: <IoSettingsOutline className="text-2xl" />,
  },
];

export const footerMenus = [
  {
    id: 1,
    title: "خانه",
    icon: <IoIosHome className="text-xl" />,
    href: "/",
  },
  {
    id: 2,
    title: "ابزار ها",
    icon: <FaTools className="text-xl" />,
    href: "/products",
  },
  {
    id: 3,
    title: "",
    icon: (
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
    ),
    href: "/cart",
  },
  {
    id: 4,
    title: "سفارشات",
    icon: <BsBasket2Fill className="text-xl" />,
    href: "/p-user/orders",
  },
  {
    id: 5,
    title: "علاقه مندی",
    icon: <FaHeart className="text-xl" />,
    href: "/p-user/favorites",
  },
];
