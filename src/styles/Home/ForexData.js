import { makeStyles } from "@mui/styles";

const useForexDataStyles = makeStyles(() => ({
  containerdiv: {
    margin: "100px",
    "@media (max-width : 1000px)": {
      margin: "0px",
      marginTop: "100px",
    },
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
    "@media (max-width : 1000px)": {
      margin: 0,
      marginTop: "100px",
      width: "400px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  seconddiv: {
    display: "flex",
    marginTop: 50,
    "@media (max-width : 1000px)": {
      width: "400px",
      flexDirection: "column",
    },
  },
  carddiv: {
    "@media (max-width : 1000px)": {
      marginTop: "50px",
    },
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
  caraoudiv: {
    "@media (max-width :1000px)": {
      width: 200,
    },
  },
}));

export default useForexDataStyles;
