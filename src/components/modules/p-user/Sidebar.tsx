"use client";
import { links } from "@/constants/data";
import MenuItem from "./MenuItem";
import Image from "next/image";
import { useAuthStore } from "@/stores/auth.store";
import { useState } from "react";
import AvatarSkeleton from "@/components/ui/AvatarSkeleton";

function Sidebar() {
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuthStore();
  return (
    <div className="col-span-3  hidden lg:block">
      <div className="bg-white rounded-3xl overflow-hidden  xl:w-[312px] fixed">
        <div className="h-24 bg-stone-800 relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col top-24">
            <div className="avatar online mt-8 relative">
              {isLoading && <AvatarSkeleton />}

              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white">
                {user?.image && (
                  <Image
                    src={user.image}
                    alt={user.fullname ?? ""}
                    width={1920}
                    height={1080}
                    className="w-24 h-24 object-cover"
                    onLoad={() => setIsLoading(false)}
                    onError={() => setIsLoading(false)}
                  />
                )}
              </div>
            </div>

            <h1 className="text-sm md:text-lg font-Lalezar mt-4">
              {user?.fullname}
            </h1>
          </div>
        </div>

        <nav className="mt-24">
          {links.map((link) => (
            <MenuItem key={link.id} {...link} />
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
