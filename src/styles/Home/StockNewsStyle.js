import { makeStyles } from "@mui/styles";

const useStockNews = makeStyles(() => ({
  newsdiv: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  containerdiv: {
    backgroundColor: "#09203f",
  },
  newscontent: {
    marginTop: "50px",
    "&:hover": {
      color: "#F0F8FF",
    },
    textAlign: "center",
  },
  titlelink: {
    textDecoration: "none",
    color: "white",
    marginTop: "100px",
    "&:hover": {
      color: "white",
      textDecoration: "underline",
    },
  },
  cardTitle: {
    "@media (max-width: 1000px)": {
      fontSize: "15px",
    },
  },
}));

export default useStockNews;
