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

function Filter({ filterField, options }: TFilter) {
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
    <div className="flex w-[85%] md:w-full md:inline-flex items-center gap-x-0.5 md:gap-x-2 font-Dana bg-white p-1 child:transition-all child:cursor-pointer text-xs md:text-sm rounded-md mt-5 lg:mt-0">
      {options.map((option, index) => (
        <div
          key={index}
          className={`text-zinc-800 flex items-center justify-center flex-1 hover:bg-yellow-500 ${
            option.slug === paramValue ? "bg-yellow-500 !text-white" : ""
          } hover:text-white py-1 px-1 rounded-md line-clamp-1`}
          onClick={() => handleFilterParm(option.slug)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
}

export default Filter;
