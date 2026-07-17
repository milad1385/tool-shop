"use client";
import Title from "@/components/modules/p-admin/Title";
import { IDurationChart } from "@/libs/types";
import React from "react";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

function DurationChart({ title, data }: IDurationChart) {
  const windowWidth: number = Number(
    typeof window !== "undefined" && window.innerWidth,
  );

  return (
    <div className="duration-chart  rounded-3xl bg-white py-4 md:py-6 px-8">
      <Title content={title} />
      <ResponsiveContainer height={267}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="duration"
            paddingAngle={2}
            cx={windowWidth >= 768 ? "40%" : ""}
            cy={windowWidth >= 768 ? "50%" : ""}
            outerRadius={110}
            innerRadius={85}
          >
            {data.map((entry) => (
              <Cell
                key={entry.duration}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>

          <Tooltip
            wrapperStyle={{
              fontSize: windowWidth > 768 ? "16px" : "12px",
              fontFamily: "Dana",
            }}
          />

          {windowWidth >= 768 && (
            <Legend
              verticalAlign="middle"
              layout="horizontal"
              align="right"
              width={135}
              iconSize={12}
              iconType="circle"
              wrapperStyle={{ fontFamily: "Dana" }}
            />
          )}

          <Legend
            verticalAlign="bottom"
            layout="horizontal"
            align="right"
            wrapperStyle={{
              marginTop: "20px",
              fontSize: "14px",
              fontFamily: "Dana",
            }}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DurationChart;
