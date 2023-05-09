import { makeStyles } from "@mui/styles";

const useCryptoMarket = makeStyles(() => ({
  cryptomarkettopdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "center",
  },
  cryptomarketcontainer: {},
  cryptopricediv: {
    marginTop: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
  },
}));

export default useCryptoMarket;
