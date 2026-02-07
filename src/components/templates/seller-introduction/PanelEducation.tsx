import React from "react";
import RegisterTitle from "./RegisterTitle";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

function PanelEducation() {
  const router = useRouter();
  const pathname = usePathname();
  const enterInPanel = () => {
    router.push(`${pathname}?step=4&subStep=1`);
  };
  return (
    <div>
      <RegisterTitle content="آشنایی نحوه کار کردن با پنل فروشنده" />
      <div className="mt-5 px-5 md:px-0">
        <ul className="list-disc mr-10 text-zinc-700 mb-5 space-y-3 text-sm">
          <li>نحوه ایجاد محصول جدید</li>
          <li>نحوه درخواست تمدید موجودی</li>
      
          <li>نحوه بررسی درآمد ماهیانه</li>
        </ul>
        <video
          src="/video/intro.mp4"
          className="my-10 md:my-0"
          controls
        ></video>

        <div className="flex items-center justify-center mt-5">
          <Button
            onClick={enterInPanel}
            type="submit"
            className="!w-[150px] md:!w-[200px] text-sm md:text-base"
          >
            ورود به پنل فروشنده
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PanelEducation;
