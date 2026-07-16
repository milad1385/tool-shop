import React, { ComponentProps } from "react";
type TButton = ComponentProps<"button">;

function Button({ className, children, ...rest }: TButton) {
  return (
    <button
      {...rest}
      className={`p-3 rounded-md text-sm md:text-base bg-stone-800 hover:bg-stone-900 text-white w-full  ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
