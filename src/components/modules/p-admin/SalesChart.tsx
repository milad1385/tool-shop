"use client";
import { ISalesChart } from "@/libs/types";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function SalesChart({ data }: ISalesChart) {
  const windowWidth: number = Number(
    typeof window !== "undefined" && window.innerWidth,
  );

  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
    extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
    text: "#374151",
    background: "#fff",
  };

  //   const allDates = eachDayOfInterval({
  //     start: subDays(new Date(), numDays - 1),
  //     end: new Date(),
  //   });

  //   const data = allDates.map((date) => {
  //     return {
  //       label: format(date, "MMM dd"),
  //       totalSales: orders
  //         ?.filter((order) => isSameDay(date, new Date(order.createdAt)))
  //         .reduce((acc, cur) => acc + cur.totalPrice, 0),
  //       extrasSales: orders
  //         ?.filter((order) => isSameDay(date, new Date(order.createdAt)))
  //         .reduce((acc, cur) => acc + cur.discount, 0),
  //     };
  //   });

  return (
    <div className="bg-white mt-5 rounded-3xl  pt-6 pb-3 pl-0 pr-6 md:px-6">
      <div className="text-base font-IranMedium md:text-xl mb-4">
        فروش از <span className="text-namava text-lg">10 خرداد 1403</span> تا
        <span className="text-namava text-lg">20 خرداد 1403</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{
              fill: colors.text,
              fontSize: windowWidth <= 768 ? "12px" : "14px",
            }}
          />
          <YAxis
            unit="ت"
            tick={{
              fill: colors.text,
              fontSize: windowWidth <= 768 ? "12px" : "16px",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              fontSize: windowWidth <= 768 ? "12px" : "16px",
            }}
          />

          <CartesianGrid strokeDasharray={3} />
          <Area
            type="monotone"
            dataKey="totalSales"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth="2"
            name="مقدار فروش"
            unit="تومان"
          />
          <Area
            type="monotone"
            dataKey="extrasSales"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth="2"
            name="مقدار تخفیف"
            unit="تومان"
          />

          <Legend
            verticalAlign="bottom"
            layout="horizontal"
            align="right"
            wrapperStyle={{ marginTop: "20px" }}
            iconType="circle"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
