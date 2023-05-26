import { makeStyles } from "@mui/styles";

const useOverviewStyles = makeStyles({
  overviewmain: {
    backgroundColor: "#F0F8FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contentdiv: {
    marginTop: "150px",
    width: "1500px",
  },
  introoverview: {
    display: "flex",
    justifyContent: "space-between",
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
});

export default useOverviewStyles;
