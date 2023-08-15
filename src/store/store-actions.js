import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendBaseUrl } from "../constants/constants";
import {
  getAllBlogs,
  getCryptoNews,
  getCryptoPrice,
  getForexData,
  getStockNews,
  getStockPrice,
  getStockPricesforHeatMap,
} from "../reducers/reducers";
const CoinpaprikaAPI = require("@coinpaprika/api-nodejs-client");

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    prices: [],
    stocknews: [],
    stockprice: [],
    forexdata: [],
    stockpriceforheatmap: [],
    allblogs: [],
    loading: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptoNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(getCryptoPrice.fulfilled, (state, action) => {
      state.prices = action.payload;
    });
    builder.addCase(getStockNews.fulfilled, (state, action) => {
      state.stocknews = action.payload;
    });
    builder.addCase(getStockPrice.fulfilled, (state, action) => {
      state.stockprice = action.payload;
    });
    builder.addCase(getForexData.fulfilled, (state, action) => {
      state.forexdata = action.payload;
    });
    builder.addCase(getStockPricesforHeatMap.fulfilled, (state, action) => {
      state.stockpriceforheatmap = action.payload;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.allblogs = action.payload;
    });
  },
});

export const { setCryptoSymbol } = newsSlice.actions;

export default newsSlice.reducer;
