import Image from "next/image";
import Logout from "@/components/templates/p-admin/index/Logout";
import { ITopbar } from "@/libs/types";
import SidebarMenu from "./SidebarMenu";
import AdminProfile from "./AdminProfile";

function Topbar({ role }: ITopbar) {
  return (
    <div className="bg-white sticky top-0 z-40 p-4 flex items-center justify-between">
      <div className="flex items-center gap-x-3">
        <SidebarMenu />
        <AdminProfile />
      </div>
      <div>
        <Logout />
      </div>
    </div>
  );
}

export default Topbar;
