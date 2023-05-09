import React from "react";
import StockNews from "./StockNews/StockNews";
import StockMarketPrices from "./StockMarketPrices/StockMarketPrices";

function Stocks() {
  return (
    <section>
      <StockNews />
      <StockMarketPrices />
    </section>
  );
}

export default Stocks;
