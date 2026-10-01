"use client";
import { useAuthStore } from "@/stores/auth.store";
import React, { useTransition } from "react";
import toast from "react-hot-toast";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";
import { FaSpinner } from "react-icons/fa";

function Logout() {
  const [isPending, startTransition] = useTransition();
  const { logout } = useAuthStore();

  const logoutClickHandler = () => {
    const toastId = toast.loading("در حال خروج...");

    startTransition(async () => {
      logout()
      toast.success("با موفقیت خارج شدید", { id: toastId });
    });
  };

  return (
    <div
      onClick={logoutClickHandler}
      className={`flex items-center gap-x-2 text-[15px] cursor-pointer md:text-base p-3 md:py-3.5 md:px-4 hover:bg-stone-100 rounded-md duration-300 ${
        isPending ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {isPending ? (
        <FaSpinner className="animate-spin text-2xl text-zinc-700" />
      ) : (
        <HiMiniArrowRightEndOnRectangle className="text-2xl text-zinc-700" />
      )}
      <span className="mr-1">{isPending ? "" : "خروج"}</span>
    </div>
  );
}

export default Logout;
