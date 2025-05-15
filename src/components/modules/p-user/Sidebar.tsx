import { links } from "@/constants/data";
import MenuItem from "./MenuItem";

function Sidebar() {
 
  return (
    <div className="col-span-3  hidden lg:block">
      <div className="bg-white rounded-3xl overflow-hidden  xl:w-[312px] fixed">
        <div className="h-24 bg-stone-800 relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col top-24">
            <div className="avatar online mt-8">
              <div className="w-24 rounded-full overflow-hidden border-4 border-white">
                <img src="/images/avatar-3.jpg" />
              </div>
            </div>

            <h1 className="text-sm md:text-lg font-Lalezar mt-4">
              میلاد سلامیان
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
