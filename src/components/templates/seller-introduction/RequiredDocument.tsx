import { IRequiredDocument } from "@/libs/types";
import React from "react";

function RequiredDocument({ title, description, icon }: IRequiredDocument) {
  return (
    <section className="flex flex-col md:items-center gap-y-4 w-full px-4">
      <div className="flex items-center gap-x-3 text-zinc-700">
        {icon}
        <span className="font-bold text-sm md:text-base">{title}</span>
      </div>
      <p className="md:w-[456px] md:text-center text-sm/[28px] text-zinc-700 md:text-base/[30px]">
        {description}
      </p>
    </section>
  );
}

export default RequiredDocument;
