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
import { useState, useEffect } from "react";

function SalesChart({ data }: ISalesChart) {
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const colors = {
    totalSales: { stroke: "#4f46e5", fill: "#c7d2fe" },
    extrasSales: { stroke: "#16a34a", fill: "#dcfce7" },
    text: "#374151",
    background: "#fff",
  };

  return (
    <div className="bg-white mt-5 rounded-3xl pt-6 pb-3 pl-0 pr-6 md:px-6">
      <div className="text-sm font-IranMedium md:text-xl mb-4">
        فروش از <span>10 خرداد 1403</span> تا
        <span>20 خرداد 1403</span>
      </div>
      <ResponsiveContainer width="100%" height={isMobile ? 250 : 300}>
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: 0, bottom: isMobile ? 20 : 0 }}
        >
          <XAxis
            dataKey="label"
            tick={{
              fill: colors.text,
              fontSize: isMobile ? "12px" : "14px",
            }}
            interval={isMobile ? 1 : 0}
            tickMargin={isMobile ? 5 : 10}
            angle={isMobile ? -45 : 0}
            textAnchor={isMobile ? "end" : "middle"}
            height={isMobile ? 50 : 30}
          />
          <YAxis
            unit="ت"
            tick={{
              fill: colors.text,
              fontSize: isMobile ? "12px" : "16px",
            }}
            width={isMobile ? 40 : 60}
            tickMargin={isMobile ? 5 : 10}
            tickCount={isMobile ? 5 : 8}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: colors.background,
              fontSize: isMobile ? "12px" : "16px",
              padding: isMobile ? "5px 8px" : "10px 14px",
              borderRadius: "8px",
              border: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            }}
            labelStyle={{
              fontSize: isMobile ? "12px" : "16px",
              fontWeight: "bold",
              marginBottom: "4px",
            }}
            itemStyle={{
              fontSize: isMobile ? "12px" : "16px",
              padding: "2px 0",
            }}
          />

          <CartesianGrid strokeDasharray={3} stroke="#e0e0e0" />
          <Area
            type="monotone"
            dataKey="totalSales"
            stroke={colors.totalSales.stroke}
            fill={colors.totalSales.fill}
            strokeWidth={isMobile ? "1.5" : "2"}
            name="مقدار فروش"
            unit="تومان"
          />
          <Area
            type="monotone"
            dataKey="extrasSales"
            stroke={colors.extrasSales.stroke}
            fill={colors.extrasSales.fill}
            strokeWidth={isMobile ? "1.5" : "2"}
            name="مقدار تخفیف"
            unit="تومان"
          />

          <Legend
            verticalAlign="bottom"
            layout="horizontal"
            align={isMobile ? "center" : "right"}
            wrapperStyle={{
              marginTop: isMobile ? "10px" : "30px",
              fontSize: isMobile ? "14px" : "16px",
            }}
            iconType="circle"
            iconSize={isMobile ? 8 : 12}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;