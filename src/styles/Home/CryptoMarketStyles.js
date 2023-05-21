import { makeStyles } from "@mui/styles";

const useCryptoMarket = makeStyles((theme) => ({
  cryptomarkettopdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "left",
    textAlign: "center",
  },
  cryptomarketcontainer: {
    // width: "1000px",
    backgroundColor: "#F0F8FF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  cryptopricediv: {
    // marginTop: "50px",
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    "@media (max-width : 1000px)": {
      flexDirection: "column",
    },
  },
}));

export default useCryptoMarket;