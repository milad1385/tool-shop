"use client";
import { IArticleCategory } from "@/libs/types";
import { useState } from "react";
import { IoChevronDown } from "react-icons/io5";

function ArticleCategory({ title, subCategories }: IArticleCategory) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <li className="select-none text-sm md:text-base">
      <div
        className="flex justify-between items-center gap-3 cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{title}</span>
        {subCategories.length > 0 && (
          <IoChevronDown className={`${isOpen ? "rotate-180" : ""} transition-all`} />
        )}
      </div>
      {subCategories.length > 0 && isOpen && (
        <ul className="text-[13px] md:text-sm text-zinc-700 space-y-3 mt-2 md:mt-1.5 list-disc mr-5">
          {subCategories.map((subCategory) => (
            <li key={subCategory.id}>{subCategory.title}</li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default ArticleCategory;
