import React from "react";
import { LuUsers } from "react-icons/lu";

function EmptyRecentUsersError() {
  return (
    <div className="flex-center  lg:mt-[40px] flex-col gap-y-7 rounded-md">
      <LuUsers className="text-2xl md:text-3xl lg:text-[60px]" />
      <p className="text-sm md:text-base">
        هیچ کاربری تا این تاریخ در سایت ثبت نام نکرده است
      </p>
    </div>
  );
}

export default EmptyRecentUsersError;
