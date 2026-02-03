"use client";

import { sideBarLinks } from "@/constants/data";
import SellerStepLink from "./SellerStepLink";
import { useSearchParams } from "next/navigation";

function Sidebar() {
  const searchParams = useSearchParams();

  const step = Number(searchParams.get("step")) || 1;

  const subStep = Number(searchParams.get("substep")) || 1;

  const updatedLinks = sideBarLinks.map((link) => {
    const isStepActive = link.id <= step;

    return {
      ...link,
      isActive: isStepActive,
      options: link.options.map((opt) => {
        if (link.id === step) {
          return {
            ...opt,
            isActive: opt.id <= subStep,
          };
        }
        if (link.id < step) {
          return {
            ...opt,
            isActive: true,
          };
        }
        return {
          ...opt,
          isActive: false,
        };
      }),
    };
  });

  return (
    <div className="hidden lg:block lg:w-[300px] bg-gray-200 min-h-screen pr-5 py-12 space-y-4">
      {updatedLinks.map((link) => (
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
