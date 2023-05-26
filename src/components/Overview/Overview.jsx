import React, { useCallback } from "react";

function Overview(props) {
  let prices;
  if (props.crypto) {
    prices = props.crypto;
  } else if (props.stocks !== props.crypto) {
    prices = props.stocks;
  } else if (props.forex) {
    prices = props.forex;
  }
  useCallback(() => {
    console.log(prices);
  }, []);
  console.log(prices);
  return <React.Fragment>{}</React.Fragment>;
}

export default Overview;
