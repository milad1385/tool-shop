"use client";
import Button from "@/components/ui/Button";
import { usePathname, useRouter } from "next/navigation";

function EmptyError() {
  const router = useRouter();
  const pathname = usePathname();

  const handleResetSearch = () => {
    router.replace(pathname, { scroll: false });
  };

  return (
    <div className="bg-black text-white px-4 py-16 flex items-center justify-center flex-col gap-y-6">
      <h3 className="text-base md:text-2xl font-bold">
        اطلاعاتی با این فیلتر پیدا نشد
      </h3>
      <Button
        onClick={handleResetSearch}
        className="!w-[180px] !bg-white !text-black hover:!bg-gray-100 transition-colors"
      >
        جستجو دوباره
      </Button>
    </div>
  );
}

export default EmptyError;
