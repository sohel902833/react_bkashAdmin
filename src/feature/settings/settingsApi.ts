import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import { ISettingsResponse } from "./settings.types";

export const settingsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    settings: builder.query<ISettingsResponse, null>({
      query: () => ({
        url: "/admin/settings",
        method: "GET",
      }),
      providesTags: [TagTypes.SETTINGS],
    }),
    setSettings: builder.mutation({
      query: (data) => ({
        url: "admin/settings",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [TagTypes.SETTINGS],
    }),
  }),
});
export const { useSettingsQuery, useSetSettingsMutation } = settingsApi;
