import { IBreadcrumb } from "@/libs/types";
import Link from "next/link";
import { HiChevronLeft } from "react-icons/hi2";

function Breadcrumb({ links }: IBreadcrumb) {
  return (
    <div className="bg-white my-6  p-5 rounded-2xl">
      <div className="flex items-center gap-x-2 w-[372px] md:w-[450px]">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className={`flex items-center gap-x-1 text-sm lg:text-base ${
              link.id !== links.length
                ? "text-zinc-700"
                : "text-yellow-500 font-DanaMedium"
            } `}
          >
            {link.name}
            {link.id !== links.length ? <HiChevronLeft className="text-lg" /> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
