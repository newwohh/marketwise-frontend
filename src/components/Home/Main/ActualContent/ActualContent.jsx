import React from "react";
import Crypto from "./Crypto/Crypto";
import Forex from "./Forex/Forex";
import Stocks from "./Stocks/Stocks";

function ActualContent() {
  return (
    <section>
      <Stocks />
      <Crypto />
      <Forex />
    </section>
  );
}

export default ActualContent;
