import Link from "next/link";
import React from "react";
import { TbFileDownload } from "react-icons/tb";

function DownloadItem() {
  return (
    <div className="bg-white border p-6 rounded-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div>
            <div className="p-4 bg-stone-100 rounded-full">
              <TbFileDownload className="text-xl md:text-2xl" />
            </div>
          </div>
          <div className="leading-8 mr-2">
            <p className="text-base text-zinc-700 font-Lalezar">دانلود شماره 1</p>
            <span className="text-xs text-stone-500">
              دوشنبه 28 اردیبهشت 1404
            </span>
          </div>
        </div>
        <div>
          <Link
            href="#"
            className="bg-yellow-500 hover:bg-stone-800 hover:transition hover:duration-700 p-4 py-1 text-center rounded-xl text-white"
          >
            دانلود
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DownloadItem;
