import {apiSlice} from "../api/api.slice";
import {createSlice} from "@reduxjs/toolkit";

const userState = createSlice({
  name: "user",
  initialState: {
    token: "",
    email: "renela79@gmail.com",
  },
  reducers: {
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: () => ({
        url: "/login",
        method: "POST",
        body: {},
      }),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "/?results=3",
        method: "GET",
      }),
    }),
  }),
});

export const {useGetUsersQuery, useLoginUserMutation} = userApiSlice;
export const {changeEmail} = userState.actions;
export default userState.reducer;
