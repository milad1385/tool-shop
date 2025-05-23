"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

type Option = {
  label: string;
  slug: string;
};

type TFilter = {
  filterField: string;
  options: Option[];
};

function Filters({ filterField, options }: TFilter) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const paramValue = searchParams.get(filterField) || options.at(0)?.slug;

  const handleFilterParm = (slug: string) => {
    params.set(filterField, slug);
    router.replace(`${pathname}?${params}`);
  };
  return (
    <div className="bg-white inline-flex items-center gap-x-2 p-1 child:transition-all child:cursor-pointer text-xs md:text-sm rounded-md">
      {options.map((option, index) => (
        <div
          key={index}
          className={`text-black hover:bg-yellow-500 ${
            option.slug === paramValue ? "bg-yellow-500 text-white" : ""
          } hover:text-white py-1 px-1 rounded-md`}
          onClick={() => handleFilterParm(option.slug)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default Filters;
