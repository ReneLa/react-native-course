import React from "react";
import {Button, ScrollView} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import PopularMovies from "../../containers/PopularMovies";
import TopRated from "../../containers/TopRatedMovies";
import {useLazyGetPopularMoviesQuery} from "../../redux/movies/movies.slice";
import {useDispatch} from "react-redux";

export default function Home() {
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [getPopularMovies, {data, isLoading, error, isSuccess}] =
    useLazyGetPopularMoviesQuery();

  console.log(data);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={{
        // flex: 1,
        paddingTop: insets.top + 10,
      }}>
      <PopularMovies isLoading={isLoading} />
      <TopRated />
      <Button
        title={isLoading ? "is loading ..." : "Fetch Popular"}
        onPress={() => getPopularMovies()}
      />
    </ScrollView>
  );
}
