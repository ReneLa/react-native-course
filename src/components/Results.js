import {View, Text} from "react-native";
import React from "react";
import Container from "./Container";

const Results = ({results}) => {
  return (
    <Container
      column
      // className='absolute h-[50px] bg-red-500 left-0 right-0'
      customStyles={{
        backgroundColor: "tomato",
        bottom: -40,
        right: 0,
        left: 0,
        height: 50,
        zIndex: 1004,
      }}>
      <Text>Results</Text>
    </Container>
  );
};

export default Results;
