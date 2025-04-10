"use client";
import { IPagination } from "@/libs/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Pagination({ count }: IPagination) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const currentPage = Number(searchParams.get("page")) || 1;

  const changePage = (page: string) => {
    params.set("page", page);
    router.push(`${pathname}?${params}`);
  };
  return (
    <div className="flex items-center justify-center gap-x-3 my-10">
      {Array(count)
        .fill(0)
        .map((page, index) => (
          <button
            key={index + 1}
            onClick={() => changePage((index + 1).toString())}
            className={`w-[50px] h-[50px] bg-white flex-center rounded-md shadow  ${
              currentPage === index + 1 ? "active-page" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}

export default Pagination;
