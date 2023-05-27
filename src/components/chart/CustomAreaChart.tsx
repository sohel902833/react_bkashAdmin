import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { IChartDataItem } from "../../types/chart.types";
import CustomTooltip from "./CustomTooltip";

interface Props {
  title: string;
  value: IChartDataItem[];
  height?: number;
  valueKeyName?: string;
  titleKeyName?: string;
}

const CustomAreaChart: React.FC<Props> = ({
  title,
  height = 200,
  titleKeyName = "name",
  valueKeyName = "value",
  value,
}) => {
  const fillColor = "hsl(var(--pc))";
  const lineColor = "hsl(var(--p))";
  return (
    <div style={{ width: "100%" }}>
      <h2 className="my-2 text-xl border-b-2 border-primary w-fit pr-2 text-left">
        {title}
      </h2>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
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
          <Area
            type="monotone"
            dataKey={valueKeyName}
            stroke={lineColor}
            fill={fillColor}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomAreaChart;
