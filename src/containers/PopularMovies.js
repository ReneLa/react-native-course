import React from "react";
import {ActivityIndicator, Image, ScrollView, Text} from "react-native";
import Container from "../components/Container";
import {useGetPopularMoviesQuery} from "../redux/movies/movies.slice";
import MovieCard from "../components/MovieCard";
import {useSelector} from "react-redux";

export default function PopularMovies({isLoading}) {
  // const {isLoading} = useGetPopularMoviesQuery();
  const {popular_movies} = useSelector(({movies}) => movies);
  return (
    <>
      <Text className="text-zinc-500 text-xl font-semibold mb-4">
        Popular Movies
      </Text>
      {/* {isLoading && <ActivityIndicator color="#fff" size={"small"} />} */}
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}>
        {popular_movies?.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </ScrollView>
    </>
  );
}
