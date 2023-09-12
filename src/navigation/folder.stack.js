import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import {AppRoutes} from "./app.routes";
import Folder from "../screens/folder";

const Stack = createStackNavigator();

export const FolderStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#26272b",
        },
      }}>
      <Stack.Screen name={AppRoutes.FOLDER} component={Folder} />
    </Stack.Navigator>
  );
};
