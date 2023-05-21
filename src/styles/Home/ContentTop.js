import { makeStyles } from "@material-ui/core/styles";

const useContentTopStyles = makeStyles((theme) => ({
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
  },
  firstdiv: {
    marginTop: "200px",
    marginBottom: "200px",
    width: "100%",
    [theme.breakpoints.down("lg")]: {
      // display: "none",
    },
  },
  firstcardlinks: {
    color: "#002244",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline", color: "#002244" },
  },
  secureimg: {
    width: "700px",
    height: "600px",
    marginLeft: "-100px",
    [theme.breakpoints.down("lg")]: {
      // display: "none",
      width: "500px",
      height: "400px",
      marginLeft: "0",
    },
  },
  seconddivmain: {
    display: "flex",
    textAlign: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
  },
  secondivsecurity: {
    height: "200px",
    [theme.breakpoints.down("lg")]: {
      // display: "none",
      padding: "100",
      height: "290px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  securecontentdiv: {
    marginTop: "50px",
    display: "flex",
    alignContent: "center",
    [theme.breakpoints.down("lg")]: {
      // display: "none",
      flexDirection: "column",
      textAlign: "center",
      justifyContent: "center",
    },
  },
  secondivlink: {
    fontSize: "20px",
    color: "grey",
    textDecoration: "none",
    "&:hover": {
      color: "#002244",
      textDecoration: "underline",
    },
  },
  secondivtitle: {
    backgroundColor: "#F0F8FF",
    [theme.breakpoints.down("lg")]: {
      // display: "none",
    },
  },
}));

export default useContentTopStyles;
