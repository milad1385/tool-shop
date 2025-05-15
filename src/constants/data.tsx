import { HiOutlineDocumentDownload } from "react-icons/hi";
import {
  HiOutlineChevronRight,
  HiOutlineCreditCard,
  HiOutlineFaceSmile,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";;
import { LiaComments } from "react-icons/lia";
import { IoTicketOutline } from "react-icons/io5";

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
