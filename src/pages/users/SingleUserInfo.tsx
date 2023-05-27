import { useState } from "react";
import CustomBarChart from "../../components/chart/CustomBarChart";
import AppHeader from "../../components/layout/AppHeader";
import UserListTable from "../../components/users/UserListTable";
import { chartData } from "../main/data";

const SingleUserInfoPage = () => {
  const [transectionType, setTransectionType] = useState<
    "all" | "cashin" | "cashout"
  >("all");

  const handleChangeTransectionType = (type: "all" | "cashin" | "cashout") => {
    setTransectionType(type);
  };

  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="User (Md Sohrab Hossain)" />
      <div className="px-4">
        <div className="inline-flex items-center justify-center w-full mt-4">
          <div className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-primary font-bold font-mono text-3xl">
                5000
              </h3>
              <p>Total Users</p>
            </div>

            <p>User Info: </p>
            <h2 className="text-xl my-3">Name: Md Sohrab Hossain Sohel</h2>
            <p>Birth Date: 05-03-2002</p>
            <p>Nid: 05-03-2002</p>
          </div>
        </div>
        <div className="btn-group mt-4">
          <button
            onClick={() => handleChangeTransectionType("all")}
            className={`btn ${transectionType === "all" ? "btn-active" : ""}`}
          >
            Overall
          </button>
          <button
            onClick={() => handleChangeTransectionType("cashin")}
            className={`btn ${
              transectionType === "cashin" ? "btn-active" : ""
            }`}
          >
            Cash in
          </button>
          <button
            onClick={() => handleChangeTransectionType("cashout")}
            className={`btn ${
              transectionType === "cashout" ? "btn-active" : ""
            }`}
          >
            Cash out
          </button>
        </div>
        <br />
        <br />
        <br />
        {transectionType === "cashin" ? (
          <UserListTable />
        ) : (
          <CustomBarChart
            title="User Signup History"
            value={chartData}
            height={400}
          />
        )}
      </div>
    </div>
  );
};

export default SingleUserInfoPage;
