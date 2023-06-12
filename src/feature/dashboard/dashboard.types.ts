export interface IDashboardInfoResponse {
  mainAccountBalance: number;
  totalAdminCashIn: number;
  totalAgentCount: number;
  totalAgentBalance: number;
  totalUser: number;
  totalUserBalance: number;
  totalAdminCount: number;
}

interface IChartUser {
  firstName: string;
  registeredAt: string;
  lastName: string;
  email: string;
  userType: string;
  _id: string;
}
interface IChartItem {
  count: number;
  users: IChartUser[];
}
export interface IUserRegistrationHistoryResponse {
  filterBy: string;
  data: IChartItem[];
}
