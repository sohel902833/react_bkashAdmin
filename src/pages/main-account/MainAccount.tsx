import { useState } from "react";
import CustomAreaChart from "../../components/chart/CustomAreaChart";
import AppHeader from "../../components/layout/AppHeader";
import AddBalanceModal from "../../components/main-account/AddBalanceModal";
import MainAccountBalanceHistoryTable from "../../components/main-account/MainAccountBalanceHistoryTable";
import {
  useGetMainAccountInfoQuery,
  useGetMainAccountTransectionQuery,
} from "../../feature/admin-transection/adminTransectionApi";
import { chartData } from "../main/data";

const MainAccount = () => {
  const { isLoading, data } = useGetMainAccountInfoQuery(null);

  const [isTableView, setIsTableView] = useState(true);
  const [isAddBalanceModalOpen, setIsAddBalanceModalOpen] = useState(false);
  const handleSetIsTableView = () => {
    setIsTableView((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="Main Account" />
      <div className="px-4">
        <div className="inline-flex items-center justify-center w-full mt-4">
          <div className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex items-center justify-center flex-col">
            <h3 className="text-primary font-bold font-mono text-3xl">
              {data?.balance}
            </h3>
            <p>Total Balance</p>
            <button
              onClick={() => setIsAddBalanceModalOpen(true)}
              className="btn btn-primary mt-4"
            >
              Add Balance
            </button>
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
          <MainAccountBalanceHistoryTable />
        ) : (
          <CustomAreaChart
            title="Account History"
            value={chartData}
            height={400}
          />
        )}
      </div>
      <AddBalanceModal
        open={isAddBalanceModalOpen}
        setOpen={setIsAddBalanceModalOpen}
      />
    </div>
  );
};

export default MainAccount;
