import { formatDate, getRoleNames } from "@/utils/helper";
import Image from "next/image";
import React from "react";

function ArticleCommentItem({ comment, user, createdAt }) {
  return (
    <div className="p-4 md:p-5 bg-gray-100 rounded-lg">
      <div className="pb-4 mb-4 border-b border-b-neutral-200/60 flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="flex-center w-14 h-14 p-1 border border-gray-300  rounded-full">
            <Image
              src={user?.image ? user.image : "/images/user.jpg"}
              alt="user.jpg"
              width={1920}
              height={1080}
              className="w-12 h-12 block object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <span className="text-sm md:text-base">
              {user.fullname}
              <span className="font-bold text-sm md:text-base">
                {" "}
                | {getRoleNames(user.roles)}
              </span>
            </span>
            <span className="font-dana text-sm text-gray-700">
              {formatDate(createdAt)}
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm sm:text-base/[28px] text-justify font-light text-zinc-700">
        {comment}
      </p>
    </div>
  );
}

export default ArticleCommentItem;
