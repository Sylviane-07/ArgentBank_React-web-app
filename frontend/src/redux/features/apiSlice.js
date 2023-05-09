//Import Redux ToolKit (RTK) Query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const baseUrl = "http://localhost:3001/api/v1/";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: ({ email, password }) => ({
        url: "user/login",
        method: "POST",
        body: { email, password },
      }),
        transformResponse: (response) => {
            const userToken = response.body.token
          //Store user token in localStorage
          localStorage.setItem("accessToken", JSON.stringify(userToken));
          return response
        }
    }),
  }),
});


export const { useUserLoginMutation } = apiSlice;