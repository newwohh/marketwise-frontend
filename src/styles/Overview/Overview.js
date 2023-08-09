const useOverviewStyles = {
  overviewmain: {
    backgroundColor: "#F0F8FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:1000px)": {
      flexDirection: "column",
    },
  },
  contentdiv: {
    marginTop: "150px",
    width: "1500px",
    "@media (max-width:1000px)": {
      width: "350px",
    },
  },
  introoverview: {
    display: "flex",
    justifyContent: "space-between",
    "@media (max-width:1000px)": {
      flexDirection: "column",
    },
  },
  overviewcardlink: {
    color: "#002244",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  cardlink: {
    color: "black",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
      color: "#002244",
    },
  },

  overviewrightsection: { marginLeft: "20px" },
};

export default useOverviewStyles;
