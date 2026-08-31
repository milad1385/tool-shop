"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useDebouncedCallback } from "use-debounce";

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [search, setSearch] = useState(query);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setSearch(query);
  }, [query]);

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value.trim()) {
      params.set("q", value.trim());
    } else {
      params.delete("q");
    }

    const newUrl = params.toString() ? `${pathname}?${params}` : pathname;
    router.push(newUrl, { scroll: false });
  }, 300);

  const deleteSearchParam = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");

    const newUrl = params.toString() ? `${pathname}?${params}` : pathname;
    router.push(newUrl, { scroll: false });
    setSearch("");
  };

  return (
    <div className="bg-white w-full rounded-md px-3 py-3 md:py-2 mt-5 md:!mt-0">
      <div className="flex items-center gap-x-2 relative">
        <FaMagnifyingGlass className="text-zinc-700" />
        <input
          value={search}
          className="border-none text-sm md:text-base outline-none w-full bg-transparent text-zinc-700"
          type="text"
          placeholder="جستجو کنید"
          onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            handleSearch(value);
          }}
        />
        {search && (
          <FaXmark
            className="text-zinc-700 cursor-pointer absolute left-0 hover:text-red-500 transition-colors"
            onClick={deleteSearchParam}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
