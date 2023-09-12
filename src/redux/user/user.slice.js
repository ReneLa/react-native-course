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
  }),
});

export default userState.reducer;
