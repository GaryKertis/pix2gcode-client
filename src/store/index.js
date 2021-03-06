import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import zoomReducer from "./zoomSlice";
import outputPropsReducer from "./outputPropsSlice";
import { pix2CodeApi } from "../services/pix2Code";

export const store = configureStore({
  reducer: {
    image: imageReducer,
    zoom: zoomReducer,
    outputProps: outputPropsReducer,
    // Add the generated reducer as a specific top-level slice
    [pix2CodeApi.reducerPath]: pix2CodeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pix2CodeApi.middleware),
});
