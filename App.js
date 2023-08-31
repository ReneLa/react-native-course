/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import {LogBox} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/root.navigator";
// import {store} from "./src/redux/store";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import RootReducer from "./src/redux-core/reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(RootReducer, {}, applyMiddleware(thunk, logger));

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
