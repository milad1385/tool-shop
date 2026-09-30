"use client";
import { ISaleChart, ISalesChart } from "@/libs/types";
import { formatDate, formattedPrice } from "@/utils/helper";
import { eachDayOfInterval, format, isSameDay, subDays } from "date-fns";
import { faIR } from "date-fns/locale";
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

function SalesChart({ numDays, orders }: ISalesChart) {
  const windowWidth: any = typeof window !== "undefined" && window.innerWidth;

  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
    extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
    text: "#374151",
    background: "#fff",
  };

  const allDates = eachDayOfInterval({
    start: subDays(new Date(), numDays - 1),
    end: new Date(),
  });

  const data: ISaleChart[] = allDates.map((date) => {
    return {
      label: date.toLocaleDateString("fa-IR", {
        day: "numeric",
        month: "long",
      }),
      fullDate: date.toLocaleDateString("fa-IR"),
      totalSales: orders
        ?.filter((order) => isSameDay(date, new Date(order.createdAt)))
        .reduce((acc, cur) => acc + cur.finalPrice, 0),
      extrasSales: orders
        ?.filter((order) => isSameDay(date, new Date(order.createdAt)))
        .reduce((acc, cur) => acc + cur.totalDiscount, 0),
    };
  });

  return (
    <div className="bg-milafilmBlack mt-5 rounded-md bg-white pt-6 pb-3 pl-0 pr-6 md:px-6">
      <div className="text-base font-IranMedium md:text-xl mb-4">
        فروش از{" "}
        <span className="text-milafilm text-lg">{`${formatDate(allDates[0])}`}</span>{" "}
        تا
        <span className="text-milafilm text-lg">{` ${formatDate(allDates.at(-1))}`}</span>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <XAxis
            dataKey="label"
            tick={{
              fill: colors.text,
              fontSize: windowWidth <= 768 ? "12px" : "14px",
              fontFamily: "Dana",
            }}
          />
          <YAxis
            unit="ت"
            tick={{
              fill: colors.text,
              fontSize: windowWidth <= 768 ? "12px" : "16px",
              fontFamily: "Dana",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              fontSize: windowWidth <= 768 ? "12px" : "16px",
              fontFamily: "Dana",
            }}
            formatter={(value: number, name: string) => [
              `${formattedPrice(value)}`,
              name,
            ]}
            labelFormatter={(label, payload) => {
              return payload?.[0]?.payload?.fullDate
                ? `تاریخ: ${payload[0].payload.fullDate}`
                : `تاریخ: ${label}`;
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
