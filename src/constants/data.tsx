import { AiOutlineProduct } from "react-icons/ai";
import { BsBasket2Fill, BsBookHalf, BsShop } from "react-icons/bs";
import { FaHeart, FaMoneyBill, FaRegBell, FaRegClock, FaTools } from "react-icons/fa";
import { FiShoppingCart, FiTruck } from "react-icons/fi";
import { GoCommentDiscussion, GoGift } from "react-icons/go";
import { HiOutlineDocumentDownload, HiOutlineUsers } from "react-icons/hi";
import {
  HiOutlineCreditCard,
  HiOutlineFaceSmile,
  HiOutlinePhoto,
  HiOutlineQueueList,
  HiOutlineSquares2X2,
  HiOutlineUser,
} from "react-icons/hi2";
import { IoIosGitPullRequest, IoIosHome } from "react-icons/io";
import {
  IoHomeOutline,
  IoSettingsOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { LiaComments } from "react-icons/lia";
import { LuUsers } from "react-icons/lu";
import { MdMenuBook, MdOutlineCategory } from "react-icons/md";
import { RiArticleLine } from "react-icons/ri";

export const categories = [
  {
    id: 1,
    title: "سنگ فرز",
    image: "ca-1.png",
    link: "/category/1",
  },
  {
    id: 2,
    title: "دریل شارژی",
    image: "ca-2.png",
    link: "/category/1",
  },
  {
    id: 3,
    title: "اره ساده",
    image: "ca-3.png",
    link: "/category/1",
  },
  {
    id: 4,
    title: "اره چکشی",
    image: "ca-4.png",
    link: "/category/1",
  },
  {
    id: 5,
    title: "پیچ گوشتی",
    image: "ca-5.png",
    link: "/category/1",
  },
  {
    id: 6,
    title: "اره دم روباهی",
    image: "ca-6.png",
    link: "/category/1",
  },
  {
    id: 7,
    title: "چکش",
    image: "ca-7.png",
    link: "/category/1",
  },
];

export const products = [
  {
    id: 1,
    title: "دریل بتن کن میلی متری",
    link: "/products/1",
    image: "product-1.jpg",
    price: 12000000,
    discount: 30,
  },
  {
    id: 2,
    title: "دریل شارژی مدل دیوالت",
    link: "/products/2",
    image: "product-6.jpg",
    price: 2000000,
    discount: 30,
  },
  {
    id: 3,
    title: "دستگاه مدل Henzax",
    link: "/products/3",
    image: "product-7.jpg",
    price: 10000000,
    discount: 30,
  },
  {
    id: 4,
    title: "دستگاه جوشکاری",
    link: "/products/4",
    image: "product-8.jpg",
    price: 6000000,
    discount: 30,
  },
  {
    id: 5,
    title: "دریل شارژی مدل دیوالت",
    link: "/products/5",
    image: "product-6.jpg",
    price: 2000000,
    discount: 30,
  },
  {
    id: 6,
    title: "دریل شارژی مدل دیوالت",
    link: "/products/6",
    image: "product-2.jpg",
    price: 2000000,
    discount: 30,
  },
];

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
    href: "/p-admin/users",
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
    title: "منو ها",
    href: "/p-admin/menus",
    icon: <MdMenuBook className="text-2xl" />,
  },
  {
    id: 10,
    title: "کد تخفیف",
    href: "/p-admin/discount",
    icon: <GoGift className="text-2xl" />,
  },
  {
    id: 11,
    title: "فروشندگان",
    href: "/p-admin/sellers",
    icon: <BsShop className="text-2xl" />,
  },
  {
    id: 12,
    title: "درخواست فروشندگان",
    href: "/p-admin/sellers-request",
    icon: <IoIosGitPullRequest className="text-2xl" />,
  },
  {
    id: 13,
    title: "اسلایدر ها",
    href: "/p-admin/sliders",
    icon: <HiOutlinePhoto className="text-2xl" />,
  },
  {
    id: 14,
    title: "سوالات متداول",
    href: "/p-admin/questions",
    icon: <HiOutlineQueueList className="text-2xl" />,
  },
  {
    id: 15,
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

export const brands = [
  { id: 1, slug: "ronix", label: "رونیکس" },
  { id: 2, slug: "diolet", label: "دیوالت" },
  { id: 3, slug: "macita", label: "ماکیتا" },
  { id: 4, slug: "tosan", label: "توسن" },
  { id: 5, slug: "general", label: "ژنرال استیل" },
];

export const categoriesFilter = [
  { id: 1, slug: "grinding-stone", label: "سنگ فرز" },
  { id: 2, slug: "cordless-drill", label: "دریل شارژی" },
  { id: 3, slug: "simple-saw", label: "اره ساده" },
  { id: 4, slug: "hammer-saw", label: "اره چکشی" },
  { id: 5, slug: "screwdriver", label: "پیچ گوشتی" },
];

export const colorsFilter = [
  { id: 1, slug: "red", label: "قرمز" },
  { id: 2, slug: "yellow", label: "زرد" },
  { id: 3, slug: "black", label: "مشکی" },
  { id: 4, slug: "sky", label: "آبی" },
  { id: 5, slug: "green", label: "سبز" },
];

export const articleFilter = [
  { slug: "all", label: "همه", color: "black" },
  { slug: "publish", label: "منتشر شده", color: "green-500" },
  { slug: "draft", label: "یادداشت شده", color: "red-500" },
];

export const colors = [
  { id: 3, slug: "black", label: "مشکی" },
  { id: 1, slug: "red", label: "قرمز" },
  { id: 2, slug: "yellow", label: "زرد" },
  { id: 4, slug: "sky", label: "آبی" },
  { id: 5, slug: "green", label: "سبز" },
];

export const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export const DiscountFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "فعال", slug: "active", color: "green-500" },
  { label: "غیر فعال", slug: "disactive", color: "red-500" },
  { label: "منقضی", slug: "expire", color: "yellow-500" },
];

export const statusFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "تایید شده", slug: "accepted", color: "green-500" },
  { label: "در حال بررسی", slug: "pending", color: "yellow-500" },
  { label: "رد شده", slug: "rejected", color: "red-500" },
];

export const userStatusFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "بن شده", slug: "ban", color: "yellow-500" },
  { label: "فعال", slug: "active", color: "green-500" },
];

export const orderStatusFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "تحویل داده", slug: "delivered", color: "green-500" },
  { label: "در حال پردازش", slug: "pending", color: "yellow-500" },
  { label: "آماده ارسال", slug: "shipped", color: "green-500" },
  { label: "لغو شده", slug: "canceled", color: "red-500" },
  { label: "مرجوع شده", slug: "deported", color: "red-500" },
];

export const productFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "موجود", slug: "exist", color: "green-500" },
  { label: "ناموجود", slug: "not-exist", color: "red-500" },
  { label: "فعال", slug: "not-exist", color: "green-500" },
  { label: "غیر فعال", slug: "not-exist", color: "yellow-500" },
];

export const sliderFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "فعال", slug: "active", color: "green-500" },
  { label: "غیر فعال", slug: "not-active", color: "red-500" },
];

export const questionFilterOptions = [
  { label: "همه", slug: "all", color: "black" },
  { label: "فعال", slug: "active", color: "green-500" },
  { label: "غیر فعال", slug: "not-active", color: "red-500" },
];

export const ITEM_PER_PAGE = 10;
export const MAX_FILE_SIZE = 5000000; // 5MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const sellers = [
  {
    id: 1,
    title: "فروشگاه اول",
    city: "تهران",
    link: "/seller/1",
    image: "/images/sellers/seller-1.jpg",
    productCount: 36,
  },
  {
    id: 2,
    title: "فروشگاه دوم",
    city: "زنجان",
    link: "/seller/2",
    image: "/images/sellers/seller-2.jpg",
    productCount: 28,
  },
  {
    id: 3,
    title: "فروشگاه سوم",
    city: "رشت",
    link: "/seller/3",
    image: "/images/sellers/seller-3.jpg",
    productCount: 32,
  },
  {
    id: 4,
    title: "فروشگاه چهارم",
    city: "کرج",
    link: "/seller/4",
    image: "/images/sellers/seller-4.jpg",
    productCount: 27,
  },
  {
    id: 5,
    title: "فروشگاه پنجم",
    city: "تهران",
    link: "/seller/5",
    image: "/images/sellers/seller-5.jpg",
    productCount: 24,
  },
  {
    id: 6,
    title: "فروشگاه ششم",
    city: "زنجان",
    link: "/seller/6",
    image: "/images/sellers/seller-6.jpg",
    productCount: 42,
  },
  {
    id: 7,
    title: "فروشگاه هفتم",
    city: "کرج",
    link: "/seller/7",
    image: "/images/sellers/seller-7.jpg",
    productCount: 38,
  },
  {
    id: 8,
    title: "فروشگاه هشتم",
    city: "رشت",
    link: "/seller/8",
    image: "/images/sellers/seller-8.jpg",
    productCount: 45,
  },
  {
    id: 9,
    title: "فروشگاه نهم",
    city: "تهران",
    link: "/seller/9",
    image: "/images/sellers/seller-1.jpg",
    productCount: 45,
  },
];

export const trazoItems = [
  {
    id: 1,
    title: "فروش آنلاین ۲۴/۷ در هر نقطه از ایران",
    description: "۲۴ ساعته در تمام هفته، می‌توانید سفارش دریافت کنید و بفروشید",
    icon: <FaRegClock className="text-3xl text-zinc-700" />,
  },
  {
    id: 2,
    title: "بیش از ۶ میلیون بازدید روزانه و ۳۰ میلیون مشتری",
    description:
      "کالای شما در ویترین شلوغ‌ترین فروشگاه اینترنتی ایران نمایش داده می‌شود.",
    icon: <HiOutlineUsers className="text-3xl text-zinc-700" />,
  },
  {
    id: 3,
    title: "گزارش مالی شفاف و تسویه در کمتر از ۱۵ روز",
    description:
      "طی حداکثر ۲ هفته تسویه انجام می‌شود و آمار جزيي را دریافت می‌کنید.",
    icon: <FaMoneyBill className="text-3xl text-zinc-700" />,
  },
  {
    id: 4,
    title: "امکان ارسال توسط دیجی‌کالا و فروشنده",
    description:
      "می‌توانید بسته‌بندی و ارسال را به دیجی‌کالا بسپارید یاخودتان ارسال کنید",
    icon: <FiTruck className="text-3xl text-zinc-700" />,
  },
  {
    id: 5,
    title: "ثبت نام در ۲۴ ساعت با آموزش رایگان فروش آنلاین",
    description:
      "بعد از تایید ثبت‌نامتان، تمام مراحل فروش آنلاین را یاد می‌گیرید.",
    icon: <BsBookHalf className="text-3xl text-zinc-700" />,
  },
  {
    id: 6,
    title: "استفاده از تبلیغات کلیکی و کار با یک پنل ساده",
    description:
      "با تبلیغات کلیکی و استفاده از پنل، فروشتان افزایش پیدا می‌کند.",
    icon: <FaRegBell className="text-3xl text-zinc-700" />,
  },
];
