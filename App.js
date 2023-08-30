/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/root.navigator";
import {store} from "./src/redux/store";
import {Provider} from "react-redux";

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
