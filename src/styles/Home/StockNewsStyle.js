import {} from "@mui/styles";

const useStockNews = {
  newsdiv: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  containerdiv: {
    backgroundColor: "#F0F8FF",
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
    color: "#002244",
    marginTop: "100px",
    "&:hover": {
      color: "#002244",
      textDecoration: "underline",
    },
  },
  cardTitle: {
    color: "#1F305E",
    textDecoration: "none",
    "@media (max-width: 1000px)": {
      fontSize: "15px",
    },
  },
};

export default useStockNews;
