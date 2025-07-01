import { IFilterCheckbox } from "@/libs/types";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import Checkbox from "./Checkbox";

function FilterCheckbox({ param, options }: IFilterCheckbox) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  const selected = searchParams.get(param)?.split(",") || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const newSelected = selected.includes(value)
      ? selected.filter((s) => s !== value)
      : [...selected, value];

    if (newSelected.length > 0) {
      params.set(param, newSelected.join(","));
    } else {
      params.delete(param);
    }

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <Checkbox
          label={option.label}
          slug={option.slug}
          onChange={handleChange}
          key={option.id}
          selected={selected.includes(option.slug)}
        />
      ))}
    </div>
  );
}

export default FilterCheckbox;
