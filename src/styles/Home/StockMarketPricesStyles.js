import { makeStyles } from "@mui/styles";

const useStockMarketPrices = makeStyles(() => ({
  containerstockprice: {
    backgroundColor: "#F0F8FF",
  },
  firstdiv: {
    // marginTop: "100px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    // marginBottom: "70px",
  },
  seconddiv: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  },
  exchangesLink: {
    borderRadius: "12px",
    textDecoration: "none",
    color: "#002244",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default useStockMarketPrices;
