import { apiSlice } from "../api/apiSlice";
import { TagTypes } from "../api/tagTypes";
import { IAgentListResponse } from "./agents.types";

export const agentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createAgentAccount: builder.mutation({
      query: (data) => ({
        url: "/auth/signup-agent",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [TagTypes.ALL_AGENT_LISTS, TagTypes.USER_REG_HISTORY],
    }),
    addBalanceToAgentAccount: builder.mutation({
      query: (data: { email: string; amount: string }) => ({
        url: "/admin/add-balance/agent",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        TagTypes.ALL_AGENT_LISTS,
        TagTypes.MAIN_ACCOUNT_TRANSECTIONS,
      ],
    }),
    getAllAgents: builder.query<IAgentListResponse, null>({
      query: () => ({
        url: "/agent/all-agents",
        method: "GET",
      }),
      providesTags: [TagTypes.ALL_AGENT_LISTS],
    }),
  }),
});
export const {
  useCreateAgentAccountMutation,
  useGetAllAgentsQuery,
  useAddBalanceToAgentAccountMutation,
} = agentsApi;
