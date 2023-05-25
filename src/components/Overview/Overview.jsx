import React from "react";
import { useAPI } from "../../store/Context";

function CryptoCurrency() {
  const { cryptoprice } = useAPI();
  console.log(cryptoprice);
  return <div>Overview</div>;
}

export default CryptoCurrency;
