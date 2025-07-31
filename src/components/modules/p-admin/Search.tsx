"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [search, setSearch] = useState(query);
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const handleSearch = useDebouncedCallback((value: string) => {
    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }
    router.push(`${pathname}?${params}`, { scroll: false });
  }, 300);

  const deleteSearchParam = () => {
    params.delete("q");
    router.push(`${pathname}?${params}`, { scroll: false });
    setSearch("");
  };
  return (
    <div className="bg-white w-full rounded-md px-3 py-2">
      <div className="flex items-center gap-x-2 relative">
        <FaMagnifyingGlass className="text-zinc-700" />
        <input
          value={search}
          className="border-none outline-none w-full bg-transparent text-zinc-700"
          type="text"
          placeholder="جستجو کنید"
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearch(e.target.value);
          }}
        />
        {query && (
          <FaXmark
            className="text-zinc-700 cursor-pointer absolute left-0"
            onClick={() => deleteSearchParam()}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
