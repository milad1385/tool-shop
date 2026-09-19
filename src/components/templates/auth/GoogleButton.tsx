"use client";
import { IGoogleButton } from "@/libs/types";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

function GoogleButton({ text, redirectTo }: IGoogleButton) {
  return (
    <div
      className="bg-gray-200  py-2.5 rounded-md cursor-pointer"
      onClick={() => signIn("google", { callbackUrl: redirectTo })}
    >
      <div className="flex items-center gap-x-2 justify-center">
        <span className="text-sm">{text}</span>
        <FcGoogle className="text-[28px] cursor-pointer" />
      </div>
    </div>
  );
}

export default GoogleButton;
