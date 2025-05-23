import { adminPanelLinks } from "@/constants/data";
import MenuItem from "./MenuItem";
import Logout from "./Logout";

function Sidebar() {
  return (
    <div className="col-span-2 bg-white">
      <div className="sticky top-0 p-5">
        <h1 className="font-Lalezar text-2xl text-center">پنل مدیریت ادمین</h1>
        <ul className="mt-5 space-y-1.5">
          {adminPanelLinks.map((link) => (
            <MenuItem {...link} key={link.id} />
          ))}
          <Logout/>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
