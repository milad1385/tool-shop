"use client";
import { IUserPanelTitle } from "@/libs/types";
import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowLeft } from "react-icons/hi";

function Title({ content, isBack, children }: IUserPanelTitle) {
  const router = useRouter();
  return (
    <div className="p-3 bg-stone-200 rounded-xl my-4 flex items-center justify-between">
      <h2 className="font-Lalezar">{content}</h2>
      {children}
      {isBack && (
        <HiArrowLeft
          className="md:cursor-pointer"
          onClick={() => router.back()}
        />
      )}
    </div>
  );
}

export default Title;
