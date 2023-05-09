import { makeStyles } from "@mui/styles";

const useContentTopStyles = makeStyles(() => ({
  section: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    justifyItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  firstdiv: {
    marginTop: "200px",
    marginBottom: "200px",
    width: "100%",
  },
  firstcardlinks: {
    color: "blue",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
  secureimg: {
    width: "700px",
    height: "600px",
    marginLeft: "-100px",
  },
  securecontentdiv: {
    marginTop: "50px",
    display: "flex",
    alignContent: "center",
  },
  seconddiv: {
    display: "flex",
    textAlign: "center",
    justifyItems: "center",
    justifyContent: "center",
  },
  secondivsecurity: {
    height: "200px",
  },
  secondivlink: {
    fontSize: "20px",
    color: "grey",
    textDecoration: "none",
    "&:hover": {
      color: "black",
      textDecoration: "underline",
    },
  },
}));

export default useContentTopStyles;
