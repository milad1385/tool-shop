
import CommaSvg from "./CommaSvg";

function SellerComment() {
  return (
    <div className="px-12 py-10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg text-zinc-700 font-bold">محمد رضایی</h3>
        <CommaSvg />
      </div>
      <h4 className="text-zinc-500 text-sm mt-2">فروشگاه نوین قشم</h4>
      <p className="w-[312px] text-sm/[28px] mt-5 text-zinc-700">
        مثل خیلی از اتفاق‌های بزرگ، کار ما نیز با یک نیاز ساده شروع شد، نیاز به
        اسباب بازی با کیفیت! ما در دیجی‌کالا دیده شدیم و پتانسیل این را داریم که
        چند برابر رشد کنیم
      </p>
    </div>
  );
}

export default SellerComment;
