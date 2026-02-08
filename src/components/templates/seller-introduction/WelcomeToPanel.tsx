import React from "react";
import RegisterTitle from "./RegisterTitle";
import Button from "@/components/ui/Button";
import Link from "next/link";

function WelcomeToPanel() {
  return (
    <>
      <RegisterTitle content="فروشنده گرامی به سایت ترازو خوش آمدید" />
      <div>
        <div className="space-y-8">
          <h3 className="text-xl mt-16">
            <span className="text-yellow-500 font-bold">میلاد</span> عزیز به پنل
            خودت خوش آمدی <span className="text-2xl">🙌🔥</span>
          </h3>

          <h4 className="text-lg mt-5 text-zinc-800">
            <span className="text-yellow-500 font-bold">مالک</span> فروشگاه
            تجهیزات برتر از این پس می توانید روی ما حساب کنید.
          </h4>

          <h5 className="text-lg mt-5 text-zinc-700">
            آماده شروع هیجان انگیز با اپلیکیشن ترازو هستید ؟؟؟
          </h5>
        </div>

        <div className="flex items-center justify-center gap-x-5 my-28">
          <Button
            type="submit"
            className="!w-[150px] md:!w-[200px] text-sm md:text-base"
          >
            ورود به پنل فروشنده
          </Button>
          <Link href="/">
            <Button
              type="submit"
              className="!w-[150px] md:!w-[200px] text-sm md:text-base bg-yellow-500 hover:bg-yellow-500/90"
            >
              صفحه اصلی
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default WelcomeToPanel;
