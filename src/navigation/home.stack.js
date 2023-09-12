import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Home from "../screens/home/Home.screen";
import {AppRoutes} from "./app.routes";
import MovieDetails from "../screens/home/MovieDetails.screen";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#26272b",
        },
      }}>
      <Stack.Screen name={AppRoutes.HOME} component={Home} />
      <Stack.Screen name={AppRoutes.MOVIE_DETAILS} component={MovieDetails} />
    </Stack.Navigator>
  );
};
