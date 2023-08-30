/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import {LogBox} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/root.navigator";
import {store} from "./src/redux/store";
import {Provider} from "react-redux";

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
