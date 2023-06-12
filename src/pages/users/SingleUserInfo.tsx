import { useState } from "react";
import { useParams } from "react-router-dom";
import CustomBarChart from "../../components/chart/CustomBarChart";
import AppHeader from "../../components/layout/AppHeader";
import UserTransectionsTable from "../../components/users/UserTransectionsTable";
import {
  useGetUserTotalTransectionsQuery,
  useGetUserWithTransectionQuery,
} from "../../feature/user/userApi";
import { chartData } from "../main/data";

const SingleUserInfoPage = () => {
  const { userId } = useParams();
  const { isLoading, data } = useGetUserWithTransectionQuery(userId as string);
  const { data: totalTransection } = useGetUserTotalTransectionsQuery(
    userId as string
  );
  const [transectionType, setTransectionType] = useState<
    "all" | "cashin" | "cashout"
  >("cashin");

  const handleChangeTransectionType = (type: "all" | "cashin" | "cashout") => {
    setTransectionType(type);
  };

  const { user, transections } = data || {};

  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="User (Md Sohrab Hossain)" />
      <div className="px-4">
        <div className="inline-flex items-center justify-center w-full mt-4">
          <div className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex flex-col">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-primary font-bold font-mono text-3xl">
                {user?.balance}
              </h3>
              <p>Total Balance</p>
            </div>

            <p>User Info: {user?.userType}</p>
            <h2 className="text-xl my-3">
              Name: {user?.firstName} {user?.lastName}
            </h2>
            <h2 className="text-xl my-3">Phone: {user?.phone}</h2>
            <p>
              Birth Date:{" "}
              {new Date(user?.birthdate as string).toLocaleDateString()}
            </p>
            <p>Nid: {user?.idNo}</p>
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
        <div className="flex items-center gap-5">
          <h1 className="text-primary">
            Total Cash In:{" "}
            <span className="font-bold text-2xl">
              {totalTransection?.totalCashIn}
            </span>
          </h1>
          <h1 className="text-primary">
            Total Cash Out:{" "}
            <span className="font-bold text-2xl">
              {totalTransection?.totalCashOut}
            </span>
          </h1>
        </div>
        <br />
        {transectionType === "cashin" ? (
          <UserTransectionsTable
            transections={transections ? transections : []}
          />
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
