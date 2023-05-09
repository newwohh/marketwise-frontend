import React from "react";
import CryptoNews from "./CryptoNews/CryptoNews";
import CryptoMarket from "./CryptoMarket/CryptoMarket";

function Crypto() {
  return (
    <section>
      <CryptoNews />
      <CryptoMarket />
    </section>
  );
}

export default Crypto;
