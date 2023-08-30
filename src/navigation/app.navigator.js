import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { AppRoutes } from "./app.routes";
import { AuthStack } from "./auth.stack";
import { DrawerNavigator } from "./main.drawer";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={AppRoutes.SIGN_IN}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={AppRoutes.AUTH_STACK} component={AuthStack} />
      <Stack.Screen name={AppRoutes.MAIN_DRAWER} component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
