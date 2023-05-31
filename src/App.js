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

function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  const [dataApi, setDataApi] = useState("");
  const dispatch = useDispatch();
  const { prices, stockprice, news, stocknews } = useSelector(
    (state) => state.news
  );
  const getProducts = useCallback(() => {
    dispatch(getCryptoPrice());
  }, [dataApi]);
  const cryptoNewsOverview = useCallback(() => {
    dispatch(getCryptoNews());
  }, [dataApi]);
  const stockPriceOverview = useCallback(() => {
    dispatch(getStockPrice());
  }, [dataApi]);
  const stockNewsOverview = useCallback(() => {
    dispatch(getStockNews());
  }, [dataApi]);

  useEffect(() => {
    getProducts();
  }, [dataApi]);
  useEffect(() => {
    stockPriceOverview();
  }, [dataApi]);
  useEffect(() => {
    cryptoNewsOverview();
  }, [dataApi]);
  useEffect(() => {
    stockNewsOverview();
  }, [dataApi]);
  const cryptoPrice = prices;
  const cryptoNews = news;
  console.log(news, prices);
  const stockPrice = stockprice;
  const stockNews = stocknews;
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
      </Routes>
    </React.Fragment>
  );
}

export default App;
