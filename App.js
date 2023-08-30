/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import {LogBox} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./src/navigation/root.navigator";
// import {store} from "./src/redux/store";
import {Provider} from "react-redux";
import {legacy_createStore as createStore, applyMiddleware} from "redux";
import RootReducer from "./src/redux-state/reducers";
import logger from "redux-logger";

LogBox.ignoreAllLogs();
// const middleware = applyMiddleware();

const store = createStore(RootReducer, {}, applyMiddleware(logger));
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
