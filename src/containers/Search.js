import React from "react";
import {TextInput, Text, View} from "react-native";

import Container from "../components/Container";
import Results from "../components/Results";

export default function Search() {
  return (
    <Container
      className="h-14"
      customStyles={{position: "relative", zIndex: 0}}>
      <View
        className="h-[50px] px-4 border rounded-md bg-[#E5E8E8]"
        style={{zIndex: 0}}
      />
      <View
        style={{
          position: "absolute",
          backgroundColor: "tomato",
          bottom: -10,
          right: 0,
          left: 0,
          height: 50,
          zIndex: 10,
        }}>
        <Text>Results</Text>
      </View>
      {/* <TextInput
        style={{zIndex: 0}}
        className="basis-4/5 max-h-[50px] px-4 border rounded-md border-[#E5E8E8] text-white mb-4"
        // value={inputValue}
        // onChangeText={text => handleInputChange(index, text)}
      /> */}
      {/* <Results /> */}
    </Container>
  );
}
