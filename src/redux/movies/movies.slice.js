import {createSlice} from "@reduxjs/toolkit";
import {apiSlice} from "../api/api.slice";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popular_movies: null,
    top_rated_movies: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      apiSlice.endpoints.getPopularMovies.matchFulfilled,
      (state, {payload}) => {
        state.popular_movies = payload;
      },
    );
  },
});

const moviesApis = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPopularMovies: builder.query({
      query: () => ({
        url: "/movie/popular",
        method: "GET",
      }),
      transformResponse: response => response.results,
    }),
    getTopRatedMovies: builder.query({
      query: () => ({
        url: "/movie/top_rated",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetPopularMoviesQuery,
  useLazyGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
} = moviesApis;

export default movieSlice.reducer;
