import { makeStyles } from "@mui/styles";

const useStockNews = makeStyles(() => ({
  newsdiv: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  containerdiv: {
    marginTop: "80px",
  },
  newscontent: {
    marginTop: "50px",
    margin: "50px",
    "&:hover": {
      color: "#F0F8FF",
    },
    textAlign: "center",
  },
  titlelink: {
    textDecoration: "none",
    color: "#002244",
    "&:hover": {
      color: "#002244",
      textDecoration: "underline",
    },
  },
}));

export default useStockNews;
