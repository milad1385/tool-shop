"use client"
import React, { useState } from 'react'
import FilterTitle from './FilterTitle';
import { useDebouncedCallback } from 'use-debounce';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

function MobileSearch() {
 const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = useDebouncedCallback((value: string) => {
    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }
    router.replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className="bg-white rounded-3xl py-4 px-5 block md:hidden mb-5">
      <FilterTitle title="جستجو کنید : " />
      <div className="flex justify-between gap-x-6 h-full text-slate-500 bg-gray-100 rounded-3xl my-3 p-1.5">
        <input
          type="text"
          className="placeholder-slate-500 text-sm bg-transparent flex-grow outline-none pr-3"
          placeholder="جستجو بین محصولات ها"
          onChange={(e) => {
            handleChange(e.target.value);
            setSearch(e.target.value);
          }}
          value={search}
        />
        <button className="shrink-0 bg-yellow-500 w-[40px] h-[40px] flex-center rounded-full">
          <HiMiniMagnifyingGlass className="text-xl text-zinc-700" />
        </button>
      </div>
    </div>
  )
}

export default MobileSearch