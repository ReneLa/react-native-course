import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./api/api.slice";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
