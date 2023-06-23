import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { backendBaseUrl } from "../constants/constants";
const CoinpaprikaAPI = require("@coinpaprika/api-nodejs-client");

export const getStockPricesforHeatMap = createAsyncThunk(
  "store/getStockPricesforHeatMap",
  async () => {
    try {
      const url =
        "https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=07721059f040ffb9f024f729669f5f5e";
      const data = await fetch(url);
      const res = await data.json();
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCryptoNews = createAsyncThunk(
  "store/getCryptoNews",
  async () => {
    const url =
      "https://newsdata.io/api/1/news?apikey=pub_2158439086597e033638fa92ca5509f61bf25&q=cryptocurrency";

    try {
      const response = await fetch(url);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
    }
  }
);
export const getStockNews = createAsyncThunk("store/getStockNews", async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=47a6468fccbd44a38e4be4faf555fa1a";

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result.articles;
  } catch (error) {
    console.error(error);
  }
});

export const getCryptoPrice = createAsyncThunk(
  "store/getCryptoPrice",
  async () => {
    try {
      const client = new CoinpaprikaAPI();
      let AllPrices = await client.getTicker();
      let AllPricesSliced = await AllPrices.slice(0, 17);
      return AllPricesSliced;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getStockPrice = createAsyncThunk(
  "store/getStockPrice",
  async () => {
    try {
      let urls = [
        "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=MW6LX8YCxkAxVFbIKZR7yq3OMCEZZAw6",
        "https://api.polygon.io/v3/reference/exchanges?asset_class=stocks&apiKey=MW6LX8YCxkAxVFbIKZR7yq3OMCEZZAw6",
        "https://api.polygon.io/v3/reference/dividends?apiKey=MW6LX8YCxkAxVFbIKZR7yq3OMCEZZAw6",
      ];

      const results = await Promise.all(
        urls.map(async (url) => {
          const stockResponse = await fetch(url);
          const stockPriceResult = await stockResponse.json();
          return stockPriceResult;
        })
      );
      return results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getForexData = createAsyncThunk("store/getForexData", async () => {
  try {
    let url =
      "https://api.twelvedata.com/forex_pairs?&7dbce4839cfe4a3fa28f6c5046a29dbb";

    const forexResponse = await fetch(url);
    const forexData = await forexResponse.json();

    // console.log(forexData.data.slice(0, 30));
    return forexData.data.slice(0, 30);
  } catch (error) {
    console.log(error);
  }
});

export const getAllBlogs = createAsyncThunk("store/getAllBlogs", async () => {
  try {
    const request = await fetch(backendBaseUrl + "api/v1/blogs", {
      credentials: "include",
    });
    const response = await request.json();
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

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
