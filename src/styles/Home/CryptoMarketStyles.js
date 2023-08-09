const useCryptoMarket = {
  cryptomarkettopdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "center",
  },
  cryptomarketcontainer: {
    backgroundColor: "#F0F8FF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  cryptopricediv: {
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    "@media (max-width : 1000px)": {
      flexDirection: "column",
    },
  },
};

export default useCryptoMarket;
