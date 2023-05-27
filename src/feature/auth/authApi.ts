import { AUTH_TOKEN_KEY } from "../../lib/shared";
import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import { setUserInfo } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.user) {
            localStorage.setItem(AUTH_TOKEN_KEY, result?.data?.token);
            dispatch(setUserInfo(result.data?.user));
          }
        } catch (err) {}
      },
      invalidatesTags: [TagTypes.CURRENT_USER],
    }),
    signup: builder.mutation({
      query: (data) => ({
        url: "auth/signup-admin",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.user) {
            localStorage.setItem(AUTH_TOKEN_KEY, result?.data?.token);
            dispatch(setUserInfo(result.data?.user));
          }
        } catch (err) {}
      },
      invalidatesTags: [TagTypes.CURRENT_USER],
    }),
    getCurrentUser: builder.query({
      query: (data) => ({
        url: "/user/",
        method: "GET",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result: any = await queryFulfilled;
          if (result?.data?._id) {
            dispatch(setUserInfo(result?.data));
          }
        } catch (err) {}
      },
    }),
  }),
});
export const { useLoginMutation, useGetCurrentUserQuery, useSignupMutation } =
  authApi;
