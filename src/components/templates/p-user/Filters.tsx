"use client";
import { IFilters } from "@/libs/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filters({ items, slug }: IFilters) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const filterHandler = (filterSlug: string) => {
    params.set(slug, filterSlug);
    router.push(`${pathname}?${params}`);
  };

  return (
    <div className="flex items-center gap-x-3 mb-8">
      {items.map((item) => (
        <button
          onClick={() => filterHandler(item.slug)}
          key={item.id}
          className={`text-white font-Lalezar rounded-xl px-4 py-2 ${
            item.slug === params.get(slug) ? "active-btn" : "bg-black"
          }`}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default Filters;
