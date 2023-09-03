import React from "react";
import {Text} from "react-native";
import Container from "../../components/Container";

export default function MovieDetails() {
  return (
    <Container flex={1} row center middle>
      <Text className="text-base text-white text-center">Movie details</Text>
      <Search />
    </Container>
  );
}
