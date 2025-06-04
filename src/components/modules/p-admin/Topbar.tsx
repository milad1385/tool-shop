import Image from "next/image";
import Logout from "@/components/templates/p-admin/Logout";

function Topbar() {
  return (
    <div className="bg-white sticky top-0 z-50 p-4 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <Image
          src="/images/user.jpg"
          width={1920}
          height={1080}
          alt="user-profile"
          className="w-[50px] h-[50px] rounded-full"
        />
        <div className="flex flex-col gap-y-1">
          <span className="font-Lalezar">میلاد سلامیان</span>
          <span className="text-xs font-IranMedium text-gray-700">
            ادمین کل
          </span>
        </div>
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
}

export default Topbar;
