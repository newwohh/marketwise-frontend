import React, { useEffect, useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Explore from "./pages/Explore";
import Chart from "./pages/Chart";
import SecurityInfo from "./pages/SecurityInfo";
import About from "./pages/About";
import { useLocation } from "react-router-dom";
import Overview from "./pages/Overview";
import {
  getCryptoNews,
  getCryptoPrice,
  getStockNews,
  getStockPrice,
} from "./store/store-actions";
import { useDispatch, useSelector } from "react-redux";
import Heatmap from "./pages/Heatmap";

function App() {
  const [data, setData] = useState("");
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  const dispatch = useDispatch();
  const { prices, news, stocknews, stockprice } = useSelector(
    (state) => state.news
  );
  // const dispatchCryptoPrice = useCallback(() => {
  //   dispatch(getCryptoPrice());
  // }, []);
  // const dispatchCrpytoNews = useCallback(() => {
  //   dispatch(getCryptoNews());
  // }, []);
  // const dispatchStockPrice = useCallback(() => {
  //   dispatch(getStockPrice());
  // }, []);
  // const dispatchStockNews = useCallback(() => {
  //   dispatch(getStockNews());
  // }, []);
  // useEffect(() => {
  //   dispatchCryptoPrice();
  // }, [data]);
  // useEffect(() => {
  //   dispatchCrpytoNews();
  // }, [data]);
  // useEffect(() => {
  //   dispatchStockNews();
  // }, [data]);
  // useEffect(() => {
  //   dispatchStockPrice();
  // }, [data]);
  const cryptoPrice = prices;
  const cryptoNews = news;
  const stockPrice = stockprice;
  const stockNews = stocknews;
  console.log(news, prices, stockPrice, stockNews);
  return (
    <React.Fragment>
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/education" element={<Learn />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/user_protection" element={<SecurityInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/cryptocurrency">
          <Route
            index
            element={<Overview crypto={cryptoPrice} cryptonews={cryptoNews} />}
          />
          <Route path="chart/:id" element={<Chart crypto={cryptoPrice} />} />
        </Route>
        <Route
          path="/stocks"
          element={<Overview stocks={stockPrice} stocknews={stockNews} />}
        />
        <Route
          path="/heatmap/cryptocurrency"
          element={<Heatmap cryptomap={cryptoPrice} />}
        />
        <Route path="/heatmap/stocks" element={<Heatmap stocks={"name"} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
