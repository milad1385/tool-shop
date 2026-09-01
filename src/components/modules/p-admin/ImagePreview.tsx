"use client";

import { IImagePreview } from "@/libs/types";
import Image from "next/image";
import { FaRegTrashAlt } from "react-icons/fa";


function ImagePreview({
  src,
  alt,
  onRemove,
  showRemoveButton = true,
  className = "",
  imageClassName = "",
  width = 200,
  height = 200,
}: IImagePreview) {
  return (
    <div className={`flex items-end justify-end ${className}`}>
      <div className="relative">
        <Image
          src={src}
          width={width}
          height={height}
          className={`w-[${width}px] h-[${height}px] rounded-md object-cover border-2 border-gray-200 ${imageClassName}`}
          alt={alt}
        />
        {showRemoveButton && onRemove && (
          <FaRegTrashAlt
            onClick={onRemove}
            className="text-red-500 absolute -top-8 right-0 text-xl md:cursor-pointer hover:text-red-700 transition-colors"
          />
        )}
      </div>
    </div>
  );
}

export default ImagePreview;
