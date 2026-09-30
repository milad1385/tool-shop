"use client";
import Title from "@/components/modules/p-admin/Title";
import { IDurationChart } from "@/libs/types";
import Link from "next/link";
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
    <div className="duration-chart rounded-3xl bg-white py-4 md:py-6 px-8">
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
              content={(props) => <CustomLegend {...props} data={data} />}
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
            content={(props) => <CustomLegend {...props} data={data} />}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function CustomLegend({ payload, data }: any) {
  return (
    <ul className="flex flex-col gap-2">
      {data.map((item: any) => (
        <li key={item.duration}>
          <Link
            href={`/products/${item.slug}`}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <span
              className="w-3 h-3 rounded-full shrink-0 inline-block"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-Dana" style={{ color: item.color }}>
              {item.duration}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DurationChart;
