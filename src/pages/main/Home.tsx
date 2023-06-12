import AppHeader from "../../components/layout/AppHeader";
import { chartData, dashboardInfo } from "./data";
import { useGetDashboardInfoQuery } from "../../feature/dashboard/dashboardApi";
import { useEffect, useState } from "react";
import DashboardItem from "../../components/dashboard/DashboardItem";
import DashboardUserRegistrationHistoryChart from "../../components/dashboard/DashboardUserRegistrationHistoryCharts";

const Home = () => {
  const { isLoading, data, refetch } = useGetDashboardInfoQuery(null);

  const [dashboardInformation, setDashboardInformation] =
    useState<any>(dashboardInfo);

  useEffect(() => {
    if (!isLoading && data) {
      let newData: any = data;
      let prevInfo: any = { ...dashboardInformation };

      Object.keys(prevInfo).forEach((key: string) => {
        prevInfo[key] = {
          ...prevInfo[key],
          value: newData[key],
        };
      });

      setDashboardInformation(prevInfo);
    }
  }, [isLoading, data]);

  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="Dashboard" />
      <div className="px-3">
        <div className="flex justify-end items-center py-3">
          <button onClick={refetch} className="btn btn-primary">
            Relode
          </button>
        </div>
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {Object.keys(dashboardInformation).map((key, index) => {
            const item: any = dashboardInformation[key];
            return <DashboardItem key={item.id} item={item} itemKey={key} />;
          })}
        </div>
        <br />
        <br />
        <div className="flex gap-4 flex-wrap justify-left">
          <DashboardUserRegistrationHistoryChart
            userType="all"
            title="User Signup History"
          />
          <DashboardUserRegistrationHistoryChart
            userType="user"
            title="Customer Signup History"
          />
          <DashboardUserRegistrationHistoryChart
            userType="agent"
            title="Agent Signup History"
          />
          <DashboardUserRegistrationHistoryChart
            userType="admin"
            title="Admin Signup History"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
