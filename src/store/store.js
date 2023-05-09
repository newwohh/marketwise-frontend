import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../store/store-actions";

export default configureStore({
  reducer: {
    news: newsReducer,
  },
});
