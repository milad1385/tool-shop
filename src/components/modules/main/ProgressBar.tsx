"use client";
import { useRouter } from "next/router";
import React from "react";

function ProgressBar() {
  const r = useRouter();
  console.log(r);

  return <div>ProgressBar</div>;
}

export default ProgressBar;
