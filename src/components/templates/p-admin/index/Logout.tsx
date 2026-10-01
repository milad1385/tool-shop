"use client";
import { useAuthStore } from "@/stores/auth.store";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { FaSpinner } from "react-icons/fa";
import { HiMiniArrowRightEndOnRectangle } from "react-icons/hi2";

function Logout() {
  const [isPending, startTransition] = useTransition();
  const { logout } = useAuthStore();

  const logoutClickHandler = () => {
    const toastId = toast.loading("در حال خروج");

    startTransition(async () => {
      logout();
      toast.success("با موفقیت خارج شدید", { id: toastId });
    });
  };
  return (
    <button
      onClick={logoutClickHandler}
      disabled={isPending}
      className="bg-gray-100 size-10 flex-center rounded-md hover:bg-gray-200 transition-all"
    >
      {isPending ? (
        <FaSpinner className="animate-spin text-xl text-zinc-700" />
      ) : (
        <HiMiniArrowRightEndOnRectangle className="text-2xl text-zinc-700" />
      )}
    </button>
  );
}

export default Logout;
