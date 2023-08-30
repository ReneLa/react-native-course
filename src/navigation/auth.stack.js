import {createStackNavigator} from "@react-navigation/stack";
import React from "react";
import SignIn from "../screens/auth/Sign.screen";
import Welcome from "../screens/auth/Welcome.screen";
import {AppRoutes} from "./app.routes";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: "#202123",
        },
      }}>
      <Stack.Screen
        name={AppRoutes.WELCOME}
        component={Welcome}
        initialParams={{title: "Welcome"}}
      />
      <Stack.Screen name={AppRoutes.SIGN_IN} component={SignIn} />
    </Stack.Navigator>
  );
};
