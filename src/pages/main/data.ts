import { IChartDataItem } from "./../../types/chart.types";
export const chartData: IChartDataItem[] = [
  {
    id: 1,
    name: "January",
    value: 3000,
  },
  {
    id: 2,
    name: "February",
    value: 3500,
  },
  {
    id: 3,
    name: "March",
    value: 4000,
  },
  {
    id: 4,
    name: "April",
    value: 3800,
  },
  {
    id: 5,
    name: "May",
    value: 4500,
  },
  {
    id: 6,
    name: "June",
    value: 2500,
  },
  {
    id: 7,
    name: "July",
    value: 4000,
  },
  {
    id: 8,
    name: "August",
    value: 4600,
  },
  {
    id: 9,
    name: "September",
    value: 7800,
  },
  {
    id: 10,
    name: "Octobor",
    value: 500,
  },
  {
    id: 11,
    name: "November",
    value: 4500,
  },
  {
    id: 11,
    name: "December",
    value: 2000,
  },
];

export const dashboardInfo = {
  mainAccountBalance: {
    id: 1,
    name: "Total Balance",
    value: 0,
    path: "/account-balance",
  },
  totalAdminCashIn: {
    id: 2,
    name: "Total Main Account Cashin",
    value: 0,
  },
  totalAgentBalance: {
    id: 4,
    name: "Agent Account Balance",
    value: 0,
    path: "/agent-list",
  },
  totalUserBalance: {
    id: 5,
    name: "User Account Balance",
    value: 0,
    path: "/users",
  },
  totalAgentCount: {
    id: 7,
    name: "Total Agents",
    value: 0,
    path: "/agent-list",
  },

  totalUser: {
    id: 6,
    name: "Total Users",
    value: 0,
    path: "/users",
  },

  totalAdminCount: {
    id: 8,
    name: "Total Admins",
    value: 0,
  },
};
