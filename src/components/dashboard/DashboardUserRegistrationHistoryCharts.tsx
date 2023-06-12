import { useState } from "react";
import { useGetUserRegisterHistoryChartsQuery } from "../../feature/dashboard/dashboardApi";
import CustomAreaChart from "../chart/CustomAreaChart";
import CustomBarChart from "../chart/CustomBarChart";

const defaultQuery = `by=year&year=${new Date().getFullYear()}`;
const getParsedDate = (date: string) => {
  const dateStr = new Date(date);

  return `${dateStr?.getFullYear()}-${
    dateStr?.getMonth() + 1
  }-${dateStr?.getDate()}`;
};

interface Props {
  userType: string;
  title: string;
  height?: number;
  barChart?: boolean;
}

const DashboardUserRegistrationHistoryChart: React.FC<Props> = ({
  userType,
  title,
  height,
  barChart = false,
}) => {
  const [query, setQuery] = useState(defaultQuery);
  const { isLoading: userResLoading, data: userSignupHistory } =
    useGetUserRegisterHistoryChartsQuery(
      {
        userType: userType,
        query: query,
      },
      { refetchOnMountOrArgChange: true }
    );
  const handleFilterAndDateChange = (date: any, filter: string) => {
    let query = `by=${filter}&`;

    if (filter === "day") {
      const singleDate = getParsedDate(date);
      query += `date=${singleDate}`;
    } else if (filter === "month") {
      const singleDate = new Date(date);
      query += `month=${
        singleDate.getMonth() + 1
      }&year=${singleDate.getFullYear()}`;
    } else if (filter === "year") {
      const singleDate = new Date(date);
      query += `year=${singleDate.getFullYear()}`;
    } else if (filter === "range" && date?.length === 2) {
      const startDate = getParsedDate(date[0]);
      const endDate = getParsedDate(date[1]);

      query += `startDate=${startDate}&endDate=${endDate}`;
    }
    setQuery(query);
  };

  let content = null;

  if (userResLoading) {
    content = (
      <div className="h-full w-full flex items-center justify-center">
        <h2>Loading....</h2>
      </div>
    );
  } else if (!userResLoading && userSignupHistory?.data?.length === 0) {
    content = (
      <div className="h-full w-full flex items-center justify-center">
        <h2>No data found</h2>
      </div>
    );
  } else {
    content = (
      <>
        {barChart ? (
          <CustomBarChart
            title={title}
            value={userSignupHistory?.data ? userSignupHistory?.data : []}
            valueKeyName="count"
            handleDateChange={handleFilterAndDateChange}
            height={height}
          />
        ) : (
          <CustomAreaChart
            title={title}
            value={userSignupHistory?.data ? userSignupHistory?.data : []}
            valueKeyName="count"
            handleDateChange={handleFilterAndDateChange}
          />
        )}
      </>
    );
  }

  return (
    <div className=" w-full sm:w-[500px] sm:max-w-[700px] grow">{content}</div>
  );
};

export default DashboardUserRegistrationHistoryChart;
