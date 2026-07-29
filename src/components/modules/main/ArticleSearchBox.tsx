import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowTrendUp } from "react-icons/fa6";

function ArticleSearchBox({ item, setIsOpen, onSearch }) {
  return (
    <Link
      href={`/blog/${item.slug}`}
      onClick={() => {
        setIsOpen(false);
        onSearch(item.title);
      }}
      className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-all"
    >
      {item.image && (
        <div className="w-12 h-12 bg-gray-100 rounded-md flex-shrink-0 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{item.title}</div>
        {item.excerpt && (
          <div className="text-xs text-gray-500 truncate">{item.excerpt}</div>
        )}
      </div>

      <FaArrowTrendUp className="text-gray-400 text-lg flex-shrink-0" />
    </Link>
  );
}

export default ArticleSearchBox;
