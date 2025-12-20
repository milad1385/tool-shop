
import CommaSvg from "./CommaSvg";

function SellerComment() {
  return (
    <div className="px-3 lg:px-12 pt-6 pb-10 lg:py-10">
      <div className="flex items-center justify-between">
        <h3 className="text-base lg:text-lg text-zinc-700 font-bold">محمد رضایی</h3>
        <CommaSvg />
      </div>
      <h4 className="text-zinc-500 text-[13px] lg:text-sm mt-2">فروشگاه نوین قشم</h4>
      <p className="w-[312px] text-[13px]/[28px] lg:text-sm/[28px] mt-5 text-zinc-700">
        مثل خیلی از اتفاق‌های بزرگ، کار ما نیز با یک نیاز ساده شروع شد، نیاز به
        اسباب بازی با کیفیت! ما در دیجی‌کالا دیده شدیم و پتانسیل این را داریم که
        چند برابر رشد کنیم
      </p>
    </div>
  );
}

export default SellerComment;
