import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {AppRoutes} from "./app.routes";
import {FolderStack} from "./folder.stack";
import {HomeStack} from "./home.stack";
import {SearchStack} from "./search.stack";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator();

export function MainBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "rgb(156 163 175)",
        tabBarStyle: {
          backgroundColor: "#202123",
          borderTopWidth: 0,
          elevation: 0,
        },
      })}>
      <Tab.Screen
        name={AppRoutes.HOME_STACK}
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoutes.SEARCH_STACK}
        component={SearchStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={AppRoutes.FOLDER_STACK}
        component={FolderStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="folder" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
