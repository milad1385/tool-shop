import { adminPanelLinks, sellerPanelLinks } from "@/constants/data";
import MenuItem from "./MenuItem";
import Logout from "./Logout";
import { ISidebar } from "@/libs/types";

function Sidebar({ title }: ISidebar) {
  const isAdmin = title === "پنل مدیریت ادمین";
  return (
    <div className="col-span-2 bg-white">
      <div className="sticky top-0 p-5">
        <h1 className="font-Lalezar text-2xl text-center">{title}</h1>
        <ul className="mt-5 space-y-0.5">
          {isAdmin
            ? adminPanelLinks.map((link) => (
                <MenuItem {...link} key={link.id} />
              ))
            : sellerPanelLinks.map((link) => (
                <MenuItem {...link} key={link.id} />
              ))}
          <Logout />
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
