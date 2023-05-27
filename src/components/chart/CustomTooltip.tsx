import React from "react";

const CustomTooltip = (props: any) => {
  const { active, payload, label, valueKeyName } = props;
  if (active && payload && payload.length) {
    const value = payload[0]?.payload[valueKeyName];
    return (
      <div className="bg-neutral px-8 py-6 rounded-sm flex flex-col gap-2">
        <h2 className="text-neutral-content">{label}</h2>
        <div className="flex items-center gap-2">
          <div className="w-[15px] h-[15px] bg-primary rounded-full"></div>
          <h1>{value}</h1>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
