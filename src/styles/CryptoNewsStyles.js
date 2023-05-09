import { makeStyles } from "@mui/styles";

const useCryptoNewsStyles = makeStyles(() => ({
  csection: {
    width: "100%",
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cndivtop: {
    width: "100%",
    textAlign: "center",
  },
  titlelink: {
    textDecoration: "none",
    color: "#002244",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  cnewscarddiv: {
    marginTop: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    // border: "1px solid black",
  },
}));

export default useCryptoNewsStyles;
