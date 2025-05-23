"use client";
import { ILinks } from "@/libs/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MenuItem({ title, href, icon }: ILinks) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center  gap-x-2 text-[15px] md:text-base p-3 md:py-3.5 md:px-4 hover:bg-stone-100 rounded-md duration-300 ${
        isActive ? "bg-stone-100" : ""
      }`}
    >
      {icon}
      <span className="mr-1">{title}</span>
    </Link>
  );
}

export default MenuItem;
