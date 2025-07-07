import { IOrderItem } from "@/libs/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function OrderItem({ onStatus, onShow, status, label, slug }: IOrderItem) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between"
      onClick={() => {
        onStatus({
          slug,
          label,
        });
        onShow(false);

        if (slug === "default") {
          params.delete("status");
        } else {
          params.set("status", slug);
        }
        router.push(`${pathname}?${params}`);
      }}
    >
      <span className={`${status.slug === slug ? "text-yellow-500" : ""}`}>
        {label}
      </span>
      {status.slug === slug && (
        <IoIosCheckmarkCircleOutline className="text-yellow-500 text-2xl" />
      )}
    </div>
  );
}

export default OrderItem;
