"use client";
import React from "react";
import Image from "next/image";
import { useAuthStore } from "@/stores/auth.store";
import { UserRoleEnums } from "@/libs/types";

function AdminProfile() {
  const { user } = useAuthStore();

  return (
    <div className="flex items-center gap-x-3">
      <Image
        src="/images/user.jpg"
        width={1920}
        height={1080}
        alt="user-profile"
        className="w-[50px] h-[50px] rounded-full"
      />
      <div className="flex flex-col gap-y-1">
        <span className="font-Lalezar">{user?.fullname}</span>
        <span className="text-xs font-IranMedium text-gray-700">
          {user?.roles.includes(UserRoleEnums.ADMIN) && "ادمین سایت"}
          {user?.roles.includes(UserRoleEnums.SUPER_ADMIN) && "ادمین کل"}
          {user?.roles.includes(UserRoleEnums.SELLER) && "فروشنده"}
        </span>
      </div>
    </div>
  );
}

export default AdminProfile;
