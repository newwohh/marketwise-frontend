import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const CoinpaprikaAPI = require("@coinpaprika/api-nodejs-client");

export const fetchCartData = async () => {};

export const getCryptoNews = createAsyncThunk(
  "store/getCryptoNews",
  async () => {
    const url =
      "https://newsdata.io/api/1/news?apikey=pub_2158439086597e033638fa92ca5509f61bf25&q=cryptocurrency";

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result.results);
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
    console.log(result);
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
      console.log(AllPricesSliced);
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
      console.log(results);
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

const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    prices: [],
    stocknews: [],
    stockprice: [],
    forexdata: [],
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
  },
});

export const { setCryptoSymbol } = newsSlice.actions;

export default newsSlice.reducer;
