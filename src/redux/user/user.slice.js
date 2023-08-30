import {apiSlice} from "../api/api.slice";
import {createSlice} from "@reduxjs/toolkit";

const userState = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  reducers: {},
});

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    loginUser: builder.mutation({
      query: () => ({
        url: "",
        method: "POST",
        body: {},
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "",
        method: "GET",
      }),
    }),
  }),
});

export default userState.reducer;
