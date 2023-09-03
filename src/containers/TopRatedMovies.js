import React from "react";
import {ActivityIndicator, Image, ScrollView, Text} from "react-native";
import Container from "../components/Container";
import {useGetTopRatedMoviesQuery} from "../redux/movies/movies.slice";
import MovieCard from "../components/MovieCard";

export default function TopRated() {
  const {isLoading, data, isError, isSuccess} = useGetTopRatedMoviesQuery();

  return (
    <>
      <Text className="text-zinc-500 text-xl font-semibold mb-4">
        Top rated Movies
      </Text>
      {isLoading && <ActivityIndicator color="#fff" size={"small"} />}
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{
          paddingHorizontal: 20,
        }}>
        {data?.results.map(movie => (
          <MovieCard movie={movie} />
        ))}
      </ScrollView>
    </>
  );
}
