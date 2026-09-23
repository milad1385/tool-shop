import { IProgressDeliverOrder } from "@/libs/types";
import { getOrderInfo, percentageClasses } from "@/utils/helper";

function ProgressDeliverOrder({ status }: IProgressDeliverOrder) {
  const { title, backgroundColor, color, percentage } = getOrderInfo(status);

  return (
    <div className="p-4">
      <div
        className={`flex items-center gap-x-1 ${color} font-DanaMedium mt-6`}
      >
        <span>🚚</span>
        <span className={`${color} font-Lalezar text-lg`}>{title}</span>
      </div>

      <div className="w-full mt-4 flex flex-row-reverse bg-gray-100 rounded-full">
        <div
          className={`${backgroundColor} ${percentageClasses[percentage]} py-1.5 rounded-full`}
        />
      </div>
    </div>
  );
}

export default ProgressDeliverOrder;
