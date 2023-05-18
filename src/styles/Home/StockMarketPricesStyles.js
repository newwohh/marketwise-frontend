import { makeStyles } from "@mui/styles";

const useStockMarketPrices = makeStyles(() => ({
  containerstockprice: {
    marginTop: "100px",
  },
  firstdiv: {
    textAlign: "center",
    display: "flex",

    justifyContent: "center",
    marginBottom: "70px",
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
