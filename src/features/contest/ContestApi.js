import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ContestApi = createApi({
  reducerPath: "ContestApi",
  baseQuery: fetchBaseQuery({
    baseUrl:'https://leetcode-api-pied.vercel.app/user/',
  }),
  endpoints: (builder) => ({
    getContestDetails: builder.query({
      query: (username) => `${username}/contests`,
    }),
  }),
});

export const { useGetContestDetailsQuery } = ContestApi;
