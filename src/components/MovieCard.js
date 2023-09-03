import React from "react";
import {Image, Text} from "react-native";
import Container from "./Container";
export default function MovieCard({movie}) {
  return (
    <Container key={movie.id} className="w-28 h-36 mb-2 mr-4">
      <Container className="h-2/3 w-full">
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          }}
          style={{flex: 1, height: "100%", width: "100%"}}
          resize="contain"
        />
      </Container>
      <Container column middle center className="h-1/3 px-4">
        <Text className="text-zinc-500 text-xs font-medium text-center">
          {movie.original_title}
        </Text>
      </Container>
    </Container>
  );
}
