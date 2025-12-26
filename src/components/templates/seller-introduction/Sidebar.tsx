import { sideBarLinks } from "@/constants/data";
import SellerStepLink from "./SellerStepLink";

function Sidebar() {
  return (
    <div className="flex-[0.32] bg-gray-200 min-h-screen pr-5 py-12 space-y-4">
      {sideBarLinks.map((link) => (
        <SellerStepLink
          key={link.id}
          title={link.title}
          isActive={link.isActive}
          icon={link.icon}
          options={link.options}
        />
      ))}
    </div>
  );
}

export default Sidebar;
