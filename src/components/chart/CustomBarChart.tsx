import React from "react";
import {
  XAxis,
  YAxis,
  BarChart,
  Tooltip,
  ResponsiveContainer,
  Bar,
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

const CustomBarChart: React.FC<Props> = ({
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
