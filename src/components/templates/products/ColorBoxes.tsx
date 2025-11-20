import { IColorBox } from "@/libs/types";
import React from "react";
import ColorBox from "./ColorBox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function ColorBoxes({
  param,
  options,
}: {
  param: string;
  options: IColorBox[];
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const selected = searchParams.get(param)?.split(",") || [];

  const handleClick = (slug: string) => {
    const newSelected = selected.includes(slug)
      ? selected.filter((s) => s !== slug)
      : [...selected, slug];

    if (newSelected.length > 0) {
      params.set(param, newSelected.join(","));
    } else {
      params.delete(param);
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="w-full  mt-5 flex items-center gap-3.5 flex-wrap">
      {options.map((option) => (
        <ColorBox
          label={option.label}
          slug={option.slug}
          onClick={handleClick}
          key={option.id}
          selected={selected.includes(option.slug)}
        />
      ))}

      <p className="mt-3 text-[15px] text-zinc-700">
        میتوانید یک یا چند رنگ رو انتخاب کنید.
      </p>
    </div>
  );
}

export default ColorBoxes;
