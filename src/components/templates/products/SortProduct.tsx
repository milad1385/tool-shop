"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function SortProduct() {
  const [status, setStatus] = useState("default");
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const handlerSortFilter = (status: string) => {
    setStatus(status);
    params.set("status", status);
    router.push(`${pathname}?${params}`);
  };
  return (
    <div className="hidden md:flex items-center text-sm md:text-base gap-x-12 bg-white p-4 rounded-3xl h-[72px] mb-6">
      <div className="flex items-center gap-x-2">
        <svg className="w-6 h-6">
          <use href="#sort"></use>
        </svg>
        <div>
          <h3 className="font-DanaDemiBold text-lg">مرتب سازی :</h3>
        </div>
      </div>
      <div className="flex items-center gap-x-4 child:cursor-pointer child:block child:py-2 child:px-4">
        <div
          onClick={() => handlerSortFilter("default")}
          className={`${status === "default" ? "sort-active" : ""} rounded-xl`}
        >
          پیش فرض
        </div>
        <div
          onClick={() => handlerSortFilter("score-desc")}
          className={`${
            status === "score-desc" ? "sort-active" : ""
          } rounded-xl`}
        >
          محبوب ترین
        </div>
        <div
          onClick={() => handlerSortFilter("createdAt-desc")}
          className={`${
            status === "createdAt-desc" ? "sort-active" : ""
          } rounded-xl`}
        >
          جدید ترین
        </div>
        <div
          onClick={() => handlerSortFilter("createdAt-asc")}
          className={`${
            status === "createdAt-asc" ? "sort-active" : ""
          } rounded-xl`}
        >
          آخرین
        </div>
        <div
          onClick={() => handlerSortFilter("price-asc")}
          className={`${
            status === "price-asc" ? "sort-active" : ""
          } rounded-xl`}
        >
          ارزان ترین
        </div>
        <div
          onClick={() => handlerSortFilter("price-desc")}
          className={`${
            status === "price-desc" ? "sort-active" : ""
          } rounded-xl`}
        >
          گران ترین
        </div>
      </div>
    </div>
  );
}

export default SortProduct;
