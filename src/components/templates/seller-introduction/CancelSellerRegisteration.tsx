import Link from "next/link";

function CancelSellerRegisteration() {
  return (
    <div className="flex-center pt-7">
      <Link href="/seller-introduction" className="text-zinc-700 block">
        انصراف از ثبت نام
      </Link>
    </div>
  );
}

export default CancelSellerRegisteration;
