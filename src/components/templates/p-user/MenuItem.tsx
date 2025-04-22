import { ILinks } from "@/libs/types";
import Link from "next/link";
import React from "react";

function MenuItem({ title, href, icon }: ILinks) {
  return (
    <Link
      href={href}
      className="flex items-center gap-x-2 py-4 px-8 hover:bg-stone-100 duration-300"
    >
      {icon}
      <span className="mr-1">{title}</span>
    </Link>
  );
}

export default MenuItem;
