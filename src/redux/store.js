import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import logger from "redux-logger";
import {apiSlice} from "./api/api.slice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(logger),
  devTools: true,
});
