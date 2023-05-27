import CustomAreaChart from "../../components/chart/CustomAreaChart";
import CustomBarChart from "../../components/chart/CustomBarChart";
import AppHeader from "../../components/layout/AppHeader";
import { chartData } from "./data";
import { Link } from "react-router-dom";
const dashboardData = [
  {
    id: 1,
    name: "Total Balance",
    value: 5000,
  },
  {
    id: 2,
    name: "Total Cashin",
    value: 5000,
  },
  {
    id: 3,
    name: "Total Cashout",
    value: 6000,
  },
  {
    id: 4,
    name: "Agent Account Balance",
    value: 5600,
  },
  {
    id: 5,
    name: "User Account Balance",
    value: 5600,
  },
  {
    id: 6,
    name: "Total Users",
    value: 50,
  },
  {
    id: 7,
    name: "Total Agents",
    value: 50,
  },
  {
    id: 8,
    name: "Total Admins",
    value: 50,
  },
];

const Home = () => {
  return (
    <div className="flex flex-col gap-1">
      <AppHeader title="Dashboard" />
      <div className="px-3">
        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
          {dashboardData.map((item) => (
            <div
              key={item.id}
              className="basis-[250px] max-w-[400px] grow bg-primary-content rounded-sm p-4 flex items-center justify-center flex-col"
            >
              <h3 className="text-primary font-bold font-mono text-3xl">
                {item.value}
              </h3>
              <p>{item.name}</p>
              <Link
                className="text-xs hover:border-b-1 border-b-primary"
                to="/account-balance"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
        <br />
        <br />
        <div className="flex gap-4 flex-wrap justify-left">
          <div className=" w-full sm:w-[500px] sm:max-w-[700px] grow">
            <CustomAreaChart title="Cash in" value={chartData} />
          </div>
          <div className=" w-full sm:w-[500px] sm:max-w-[700px] grow">
            <CustomAreaChart title="Cash out" value={chartData} />
          </div>{" "}
          <div className=" w-full sm:w-[500px] sm:max-w-[700px] grow">
            <CustomBarChart title="User Registration" value={chartData} />
          </div>
          <div className=" w-full sm:w-[500px] sm:max-w-[700px] grow">
            <CustomBarChart title="Agent Registration" value={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
