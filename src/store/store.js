import { configureStore } from "@reduxjs/toolkit";
import MarketwiseReducer from "../store/store-actions";

export default configureStore({
  reducer: {
    marketwise: MarketwiseReducer,
  },
});
