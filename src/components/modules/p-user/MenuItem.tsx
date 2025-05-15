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
      className={`flex items-center gap-x-2 text-[15px] md:text-base p-3 md:py-4 md:px-8 hover:bg-stone-100 rounded-md md:rounded-none duration-300 ${
        isActive ? "bg-stone-100" : ""
      }`}
    >
      {icon}
      <span className="mr-1">{title}</span>
    </Link>
  );
}

export default MenuItem;
