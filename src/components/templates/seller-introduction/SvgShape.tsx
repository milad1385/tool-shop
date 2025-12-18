import React from "react";

function SvgShape() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="450"
      height="410"
      viewBox="0 0 450 410"
      fill="none"
      className="absolute -top-28 md:-top-32 -right-12 w-[250px] md:w-auto -z-10"
    >
      <path
        d="M184.944 0H450V410H184.944C163.106 410 142.383 400.354 128.323 383.645L18.0913 252.645C-5.08022 225.108 -5.08022 184.892 18.0913 157.355L128.323 26.3552C142.383 9.64579 163.106 0 184.944 0Z"
        fill="url(#paint0_linear_36_1607)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_36_1607"
          x1="-10"
          y1="205"
          x2="468"
          y2="205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="yellow" />
          <stop offset="0.0001" stopColor="#f3e447" />
          <stop offset="1" stopColor="#fcf7af" stopOpacity="0.15" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgShape;
