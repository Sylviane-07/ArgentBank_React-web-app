//Import Redux ToolKit (RTK) Query
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const baseUrl = "http://localhost:3001/api/v1/";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "user/login",
        method: "POST",
        body: { email, password },
      }),
      transformResponse: (response) => {
        const responseToken = response.body.token;
        //Store userToken in localStorage
        localStorage.setItem("accessToken", JSON.stringify(responseToken));
        return response;
      },
    }),
  }),
});

export const { useUserLoginMutation } = apiSlice;
