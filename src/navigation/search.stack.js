import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import Search from "../screens/search";
import {AppRoutes} from "./app.routes";

const Stack = createStackNavigator();

export const SearchStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#26272b",
        },
      }}>
      <Stack.Screen name={AppRoutes.SEARCH} component={Search} />
    </Stack.Navigator>
  );
};
