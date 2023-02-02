import Header from "./components/Header";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";
import 'react-native-gesture-handler';
import React from "react";
import Navigation from "./components/Navigation";

export default function App() {

  return (
    <Provider store={store}>
        <Header/>
        <Navigation/>
    </Provider>
  );
}
