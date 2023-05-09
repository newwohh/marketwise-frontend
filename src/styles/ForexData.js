import { makeStyles } from "@mui/styles";

const useForexDataStyles = makeStyles(() => ({
  containerdiv: {
    margin: "100px",
  },
  titlediv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "100px",
  },
  titlelink: {
    textDecoration: "none",
    color: "#002244",
    "&:hover": {
      color: "#002244",
      textDecoration: "underline",
    },
  },
  lastcontainer: {
    margin: "100px",
    marginTop: 250,
  },
  seconddiv: {
    display: "flex",
    marginTop: 50,
  },
  seconddatasubdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginRight: 50,
  },
  lastdivlink: {
    color: "#002244",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
}));

export default useForexDataStyles;
