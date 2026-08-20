import { useAuthStore } from "@/stores/auth.store";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { HiOutlineHome, HiOutlineLogout } from "react-icons/hi";
import { IoTicketOutline } from "react-icons/io5";
import { LiaComments } from "react-icons/lia";

function ProfileBox() {
  const { user, logout } = useAuthStore();
  return (
    <div
      id="profile"
      className="absolute top-full left-0 group-hover:visible group-hover:opacity-100 invisible opacity-0 pt-5 z-50 transition-all"
    >
      <div className="w-64 bg-white py-5 px-3 border border-strong rounded-xl shadow-lg">
        <div className="flex items-center gap-x-3 pb-3 px-2 mb-3 border-b border-b-light">
          <Image
            className="size-11 rounded-full object-fill"
            width={1920}
            height={1080}
            src="/images/user.jpg"
            alt="پروفایل کاربر"
          />
          <div className="flex flex-col space-y-1 cursor-default">
            <span className="">{user.username}</span>
            <span className="text-sm">{user.phone}</span>
          </div>
        </div>

        <div>
          <Link
            href="/p-user"
            className="flex items-center gap-x-3 py-2.5 px-3 hover:bg-black-5 transition-colors rounded-lg"
          >
            <HiOutlineHome className="size-6 text-yellow-500" />
            <span className="text-zinc-800">پیشخوان</span>
          </Link>

          <Link
            href="/p-user/orders"
            className="flex items-center gap-x-3 py-2.5 px-3 hover:bg-black-5 transition-colors rounded-lg"
          >
            <AiOutlineProduct className="size-6 text-yellow-500" />
            <span className="text-zinc-800">سفارش های من</span>
          </Link>

          <Link
            href="/p-user/tickets"
            className="flex items-center gap-x-3 py-2.5 px-3 hover:bg-black-5 transition-colors rounded-lg"
          >
            <IoTicketOutline className="size-6 text-yellow-500" />
            <span className="text-zinc-800">تیکت ها</span>
          </Link>

          <Link
            href="/p-user/comments"
            className="flex items-center gap-x-3 py-2.5 px-3 hover:bg-black-5 transition-colors rounded-lg"
          >
            <LiaComments className="size-6 text-yellow-500" />
            <span className="text-zinc-800">نظرات</span>
          </Link>
        </div>

        <div className="pt-3 mt-3 border-t border-t-light">
          <button
            className="flex items-center w-full gap-x-3 py-2 px-2 text-red-90 bg-red-90/10 rounded-lg cursor-pointer hover:bg-red-90/20 transition-colors"
            type="button"
            onClick={() => logout()}
          >
            <HiOutlineLogout className="size-6 text-red-500" />
            <span className="text-caption text-red-500">
              خروج از حساب کاربری
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileBox;
