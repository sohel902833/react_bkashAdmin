import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import { IUserListResponse } from "./user.types";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<IUserListResponse, null>({
      query: () => ({
        url: "/admin/users",
        method: "GET",
      }),
      providesTags: [TagTypes.ALL_USER_LIST],
    }),
  }),
});
export const { useGetAllUserQuery } = userApi;
