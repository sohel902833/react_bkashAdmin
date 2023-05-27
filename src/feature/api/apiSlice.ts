import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AUTH_TOKEN_KEY } from "../../lib/shared";
import { TagTypes } from "./tagTypes";

const tagTypeList: string[] = Object.values(TagTypes);

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_KEY,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);
    if (token) {
      headers.set("Authorization", token);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  // baseQuery:async(args,api,extraOptions)=>{

  // },
  tagTypes: tagTypeList,
  endpoints: (builder) => ({}),
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      localStorage.clear();
    }
    return result;
  },
});
