import React from "react";
import {
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import CustomFilter from "../dashboard/CustomFilter";
import CustomTooltip from "./CustomTooltip";

interface Props {
  title: string;
  value: any[];
  height?: number;
  valueKeyName?: string;
  titleKeyName?: string;

  handleDateChange?: (date: any, filter: string) => void;
}

const CustomBarChart: React.FC<Props> = ({
  title,
  height = 200,
  titleKeyName = "name",
  valueKeyName = "value",
  value,
  handleDateChange,
}) => {
  const fillColor = "hsl(var(--pc))";
  const lineColor = "hsl(var(--p))";
  return (
    <div style={{ width: "100%" }}>
      <div className="flex justify-between items-center">
        <h2 className="my-2 text-xl border-b-2 border-primary w-fit pr-2 text-left">
          {title}
        </h2>
        <CustomFilter onDateChange={handleDateChange} />
      </div>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart
          width={500}
          height={200}
          data={value}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey={titleKeyName} />
          <YAxis />
          <Tooltip content={<CustomTooltip valueKeyName={valueKeyName} />} />
          <Bar
            dataKey={valueKeyName}
            barSize={10}
            fill={fillColor}
            radius={15}
            className="hover:bg-bgprimary"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
