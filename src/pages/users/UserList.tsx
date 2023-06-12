import { useState } from "react";
import CustomBarChart from "../../components/chart/CustomBarChart";
import DashboardUserRegistrationHistoryChart from "../../components/dashboard/DashboardUserRegistrationHistoryCharts";
import AppHeader from "../../components/layout/AppHeader";
import UserListTable from "../../components/users/UserListTable";
import { useGetAllUserQuery } from "../../feature/user/userApi";
import { chartData } from "../main/data";

const UserList = () => {
  const { isLoading, data } = useGetAllUserQuery(null);
  const [isTableView, setIsTableView] = useState(true);
  const handleSetIsTableView = () => {
    setIsTableView((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="Users" />
      <div className="px-4">
        <div className="inline-flex items-center justify-center w-full mt-4">
          <div className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex items-center justify-center flex-col">
            <h3 className="text-primary font-bold font-mono text-3xl">
              {data?.length}
            </h3>
            <p>Total Users</p>
          </div>
        </div>
        <div className="btn-group mt-4">
          <button
            onClick={handleSetIsTableView}
            className={`btn ${isTableView ? "btn-active" : ""}`}
          >
            Table
          </button>
          <button
            onClick={handleSetIsTableView}
            className={`btn ${!isTableView ? "btn-active" : ""}`}
          >
            Graph
          </button>
        </div>
        <br />
        <br />
        <br />
        {isTableView ? (
          <UserListTable />
        ) : (
          <DashboardUserRegistrationHistoryChart
            userType="user"
            title="User Signup History"
            barChart={true}
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
