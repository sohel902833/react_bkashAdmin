import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import { IAdminAccountTransectionResponse } from "./admin_transection.types";

export const adminTransectionApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addBalanceToMainAccount: builder.mutation({
      query: (data: { amount: number }) => ({
        url: "/admin/add-balance",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        TagTypes.MAIN_ACCOUNT_INFO,
        TagTypes.MAIN_ACCOUNT_TRANSECTIONS,
      ],
    }),
    getMainAccountInfo: builder.query<
      {
        message: string;
        balance: number;
      },
      null
    >({
      query: () => ({
        url: "/admin/account",
        method: "GET",
      }),
      providesTags: [TagTypes.MAIN_ACCOUNT_INFO],
    }),
    getMainAccountTransection: builder.query<
      IAdminAccountTransectionResponse,
      null
    >({
      query: () => ({
        url: "admin/account-transections",
        method: "GET",
      }),
      providesTags: [TagTypes.MAIN_ACCOUNT_TRANSECTIONS],
    }),
  }),
});
export const {
  useAddBalanceToMainAccountMutation,
  useGetMainAccountInfoQuery,
  useGetMainAccountTransectionQuery,
} = adminTransectionApi;
