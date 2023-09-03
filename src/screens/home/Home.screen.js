import React, {useState} from "react";
import {Text, View, TextInput, ScrollView} from "react-native";
import Container from "../../components/Container";
import Button from "../../components/Button";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import Search from "../../containers/Search";

export default function Home() {
  const insets = useSafeAreaInsets();
  const numInputs = 3;
  const [inputData, setInputData] = useState(Array(numInputs).fill(""));
  const [results, setResults] = useState(Array(numInputs).fill(null));

  const handleInputChange = (index, value) => {
    setInputData(prevInputData => {
      const newData = [...prevInputData];
      newData[index] = value;
      return newData;
    });
  };

  const fetch_data = async index => {
    const inputValue = inputData[index];

    try {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();

      setResults(prevResults => {
        const newResults = [...prevResults];
        newResults[index] = data.results;
        return newResults;
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <Container
      flex={1}
      column
      customStyles={{paddingHorizontal: 20, paddingTop: insets.top + 10}}>
      {/*
         <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        contentContainerStyle={{flex: 1, paddingTop: insets.top + 10}}>
        {inputData.map((inputValue, index) => (
          <Container
            key={index}
            className="mb-4"
            style={{position: "relative"}}>
            <Container row center space="space-between">
              <TextInput
                className="basis-4/5 h-[50px] px-4 border rounded-md border-[#E5E8E8] text-white z-0"
                value={inputValue}
                onChangeText={text => handleInputChange(index, text)}
              />
              <Button
                onPress={() => fetch_data(index)}
                className="rounded-md pt-2 pb-2 bg-neutral-700">
                <AntDesign name="search1" size={18} color="black" />
              </Button>
            </Container>

            {results.length > 0 && results[index] && (
              <Container
                className="mt-2 p-4 border-2 border-neutral-700 rounded-md bg-black"
                style={{position: "absolute", zIndex: 100, left: 0, right: 0}}>
                <Text className="font-nunito text-base text-white font-medium ">
                  {results[index][0]?.name.first}
                </Text>
                <Text className="font-nunito text-base text-white font-medium">
                  {results[index][0]?.email}
                </Text>
              </Container>
            )}
          </Container>
        ))} 
        </ScrollView>
        */}
    </Container>
  );
}
