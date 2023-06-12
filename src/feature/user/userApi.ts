import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import {
  ITotalTransectionsResponse,
  ITransectionListResponse,
  IUserListResponse,
} from "./user.types";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<IUserListResponse, null>({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
      providesTags: [TagTypes.ALL_USER_LIST],
    }),
    getUserWithTransection: builder.query<ITransectionListResponse, string>({
      query: (userId) => ({
        url: `/admin/users-transection/${userId}`,
        method: "GET",
      }),
    }),
    getUserTotalTransections: builder.query<ITotalTransectionsResponse, string>(
      {
        query: (userId) => ({
          url: `/admin/users-total-transection/${userId}`,
          method: "GET",
        }),
      }
    ),
    addBalanceToUserAccount: builder.mutation({
      query: (data: { email: string; amount: string }) => ({
        url: "/admin/add-balance/user",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        TagTypes.ALL_USER_LIST,
        TagTypes.MAIN_ACCOUNT_TRANSECTIONS,
      ],
    }),
  }),
});
export const {
  useGetAllUserQuery,
  useAddBalanceToUserAccountMutation,
  useGetUserWithTransectionQuery,
  useGetUserTotalTransectionsQuery,
} = userApi;
