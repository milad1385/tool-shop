import { sideBarLinks } from "@/constants/data";
import { MdLockOutline } from "react-icons/md";

function MobileMenuBar() {
  return (
    <div className="flex lg:hidden justify-center">
      {sideBarLinks.map((link, index) => (
        <div key={link.id} className="flex items-center gap-1 mt-8">
          <div className="flex items-center gap-x-1.5">
            <div
              className={`w-[25px] h-[25px] flex-center ${
                link.isActive ? "bg-yellow-500" : "bg-gray-400"
              } rounded-full`}
            >
              {link.isActive ? (
                link.icon
              ) : (
                <MdLockOutline className="text-base text-white" />
              )}
            </div>
            <span className="text-[11px]">{link.title}</span>
          </div>
          {index !== sideBarLinks.length - 1 && (
            <div className="h-[1.5px] rounded-full w-[20px] bg-gray-300 ml-1"></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default MobileMenuBar;
