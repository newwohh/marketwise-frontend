import { makeStyles } from "@mui/styles";

const HeaderLearnStyles = makeStyles(() => ({
  learnnavfirstdiv: {
    display: "flex",
    alignItems: "center",
  },
  logoimg: {
    width: "50px",
    height: "50px",
    color: "white",
  },
  learnnavcenterdiv: {
    marginLeft: "30px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  learnnavlink: {
    marginLeft: "20px",
    color: "white",
    textDecoration: "none",
    fontFamily: "Helvetica",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

export default HeaderLearnStyles;
