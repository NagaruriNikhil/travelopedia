import { configureStore } from "@reduxjs/toolkit";
import { destinationAPI } from "../api/DestinationAPI";
import { randomDestinationAPI } from "../api/randomDestinationAPI";

export const store = configureStore({
  reducer: {
    [destinationAPI.reducerPath]: destinationAPI.reducer,
    // [randomDestinationAPI.reducerPath]: randomDestinationAPI.reducer,
  },
  //this is the extra line to add to configure the API
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(destinationAPI.middleware),
  // .concat(randomDestinationAPI.middleware),
});
