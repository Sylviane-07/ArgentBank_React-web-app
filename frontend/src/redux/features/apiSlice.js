//Redux ToolKit (RTK) Query
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
      // keepUnusedData: true,
    }),
    userProfile: builder.mutation({
      query: ({ token }) => ({
        url: "user/profile",
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
      }),
      transformResponse: (response) => {
        return response.body;
      },
    }),
    userUpdate: builder.mutation({
      query: ({ token, username }) => ({
        url: "user/profile",
        method: "PUT",
        headers: { Authorization: `Bearer ${token}` },
        body: { userName: username },
      }),
      transformResponse: (response) => {
        return response.body;
      },
      keepUnusedData: true,
      //RTK Query Pessimistic Cache Data Uptdate
      async onQueryStarted({ token, username }, { dispatch, queryFulfilled }) {
        try {
          // eslint-disable-next-line
          const { data: userUpdate } = await queryFulfilled;
          // console.log("token", token);
          // console.log("username", username);
          // console.log("userUpdate", userUpdate);
          dispatch(
            apiSlice.util.updateQueryData("userProfile", { token }, (draft) => {
              Object.assign(draft, { userName: username });
            })
          );
        } catch (error) {
          // console.log(error);
        }
      },
      //RTK Query Optimistic Cache Data Uptdate
      // onQueryStarted({ token, username }, { dispatch, queryFulfilled }) {
      //   const updateResult = dispatch(
      //     apiSlice.util.updateQueryData("userProfile", { token }, (draft) => {
      //       Object.assign(draft, { userName: username });
      //     })
      //   );
      //   queryFulfilled.catch(updateResult.undo);
      // },
    }),
  }),
});

export const { useUserLoginMutation, useUserProfileMutation, useUserUpdateMutation } = apiSlice;
