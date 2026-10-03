"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";

type Option = {
  label: string;
  slug: string;
  className?: string;
  hoverClass?: string;
};

type TFilter = {
  filterField: string;
  options: readonly Option[];
};

function Filter({ filterField, options }: TFilter) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const defaultSlug = options.at(0)?.slug ?? "";
  const paramValue = searchParams.get(filterField) || defaultSlug;

  const handleFilterParam = useCallback(
    (slug: string) => {
      if (slug === paramValue) return;

      const params = new URLSearchParams(searchParams.toString());

      if (slug === defaultSlug) {
        params.delete(filterField);
      } else {
        params.delete("page");
        params.delete("q");
        params.set(filterField, slug);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [filterField, paramValue, defaultSlug, searchParams, pathname, router],
  );

  return (
    <div className="flex flex-wrap md:flex-nowrap w-full md:w-auto md:inline-flex items-center gap-x-0.5 md:gap-x-2 font-Dana bg-white p-1 text-xs md:text-sm rounded-md mt-5 lg:mt-0">
      {options.map((option) => {
        const isActive = option.slug === paramValue;

        return (
          <button
            key={option.slug}
            type="button"
            onClick={() => handleFilterParam(option.slug)}
            className={`flex items-center justify-center flex-1 md:flex-initial py-2 md:py-1.5 px-1 md:px-2 rounded-md whitespace-nowrap transition-colors ${
              isActive
                ? (option.className ?? "bg-yellow-500 text-white")
                : `text-zinc-800 ${
                    option.hoverClass ?? "hover:bg-yellow-500 hover:text-white"
                  }`
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
