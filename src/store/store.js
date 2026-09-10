import { configureStore } from "@reduxjs/toolkit";
import MarketwiseReducer from "./store-actions.js";

export default configureStore({
  reducer: {
    marketwise: MarketwiseReducer,
  },
});
