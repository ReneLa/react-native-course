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

export const {changeEmail} = userState.actions;
export default userState.reducer;
