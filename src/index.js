import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./layout/Header";
import DestinationIndex from "./Components/DestinationIndex";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header></Header>
      <DestinationIndex></DestinationIndex>
      {/* <RandomDestination></RandomDestination> */}
    </Provider>
  </React.StrictMode>
);
