"use client";
import { cn } from "@/lib/utils";
import CustomIcon from "../CustomIcon/CustomIcon";
import {
  ChartNoAxesCombined,
  MoveDownRight,
  MoveUpRight,
  TrendingUp,
} from "lucide-react";
import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";

export const dataGraphics = [
    {
      year: "2016",
      newCustomers: 4000,
      oldCustomers: 2400,
    },
    {
      year: "2017",
      newCustomers: 3000,
      oldCustomers: 1398,
    },
    {
      year: "2018",
      newCustomers: 2000,
      oldCustomers: 9800,
    },
    {
      year: "2019",
      newCustomers: 2780,
      oldCustomers: 3908,
    },
    {
      year: "2020",
      newCustomers: 1890,
      oldCustomers: 4800,
    },
    {
      year: "2021",
      newCustomers: 2390,
      oldCustomers: 3800,
    },
    {
      year: "2022",
      newCustomers: 3490,
      oldCustomers: 4300,
    },
    {
      year: "2023",
      newCustomers: 4490,
      oldCustomers: 5300,
    },
    {
      year: "2024",
      newCustomers: 4600,
      oldCustomers: 6300,
    },
  ];

const average = 78;

export default function Graphy() {
  return (
    <div className="shadow-sm bg-background rounded-lg p-5">
      <div className="flex gap-x-2 items-center">
        <CustomIcon icon={ChartNoAxesCombined} />
        <p>Sales Distributos</p>
      </div>
      <div className="flex flex-row p-1">
        <p>SALES:</p>
        <div
          className={cn(
            `flex items-center gap-1 px-2 text-xs text-white rounded-full h-[20] bg-black dark:bg-secondary`
          )}
        >
          {average}%
          {average <= 20 && (
            <MoveDownRight
              strokeWidth={2}
              className="h-4 w-4 text-nextui-danger"
            />
          )}
          {average > 20 && average <= 70 && (
            <MoveUpRight
              strokeWidth={2}
              className="h-4 w-4 text-nextui-primary"
            />
          )}
          {average > 70 && (
            <TrendingUp
              strokeWidth={2}
              className="h-4 w-4 text-nextui-succes"
            />
          )}
        </div>
      </div>
      <div className="h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={dataGraphics}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#887CFD" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#887CFD" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="newCustomers"
              stroke="#887CFD"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="oldCustomers"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
