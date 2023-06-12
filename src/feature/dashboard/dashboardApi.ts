import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import {
  IDashboardInfoResponse,
  IUserRegistrationHistoryResponse,
} from "./dashboard.types";

export const dashboardApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardInfo: builder.query<IDashboardInfoResponse, null>({
      query: () => ({
        url: "/admin/dashboard-info",
        method: "GET",
      }),
      providesTags: [TagTypes.SETTINGS],
    }),
    getUserRegisterHistoryCharts: builder.query<
      IUserRegistrationHistoryResponse,
      {
        userType: string;
        query: string;
      }
    >({
      query: ({ userType, query }) => ({
        url: `admin/user-registration/${userType}?${query}`,
        method: "GET",
      }),
      providesTags: [TagTypes.USER_REG_HISTORY],
    }),
  }),
});
export const {
  useGetDashboardInfoQuery,
  useGetUserRegisterHistoryChartsQuery,
} = dashboardApi;
