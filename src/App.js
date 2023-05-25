import React, { useEffect, useCallback, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Explore from "./pages/Explore";
import SecurityInfo from "./pages/SecurityInfo";
import About from "./pages/About";
import { useLocation } from "react-router-dom";
import Overview from "./pages/Overview";
import { getCryptoPrice, getStockPrice } from "./store/store-actions";
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
  const { prices, stockprice } = useSelector((state) => state.news);
  const getProducts = useCallback(() => {
    dispatch(getCryptoPrice());
  }, [dataApi]);
  const stockPriceOverview = useCallback(() => {
    dispatch(getStockPrice());
  }, [dataApi]);
  useEffect(() => {
    getProducts();
  }, [dataApi]);
  useEffect(() => {
    stockPriceOverview();
  }, [dataApi]);
  const cryptoPrice = prices;
  const stockPrice = stockprice;
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
        <Route
          path="/cryptocurrency"
          element={<Overview crypto={cryptoPrice} />}
        />
        <Route path="/stocks" element={<Overview stocks={stockPrice} />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
