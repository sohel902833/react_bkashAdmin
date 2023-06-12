import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";

interface Props {
  onDateChange?: (date: any, filter: string) => void;
}

const CustomFilter: React.FC<Props> = ({ onDateChange }) => {
  const [filter, setFilter] = useState<"day" | "month" | "year" | "range">(
    "year"
  );

  const handleFilterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const handleDateChange = (values: any) => {
    onDateChange && onDateChange(values, filter);
  };

  const onlyMonthPicker = filter === "month";
  const onlyYearPicker = filter === "year";
  const range = filter === "range";

  return (
    <div className="flex items-center gap-4">
      <div>
        <DatePicker
          className="bg-dark"
          render={(value, openCalendar) => {
            return (
              <button className="btn btn-primary" onClick={openCalendar}>
                {value}
              </button>
            );
          }}
          onChange={handleDateChange}
          onlyYearPicker={onlyYearPicker}
          onlyMonthPicker={onlyMonthPicker}
          range={range}
          numberOfMonths={range ? 2 : 1}
          rangeHover={range}
        />
      </div>
      <div>
        <select
          value={filter}
          onChange={handleFilterChange}
          className="select select-primary w-full max-w-xs"
        >
          <option disabled selected>
            Filter By
          </option>
          {["Day", "Month", "Year", "Range"].map((item) => (
            <option key={item} value={item.toLowerCase()}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomFilter;
