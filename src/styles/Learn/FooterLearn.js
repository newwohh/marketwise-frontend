import { makeStyles } from "@mui/styles";

const useFooterLearnStyles = makeStyles(() => ({
  footer: {
    marginTop: 200,
  },
  footercontainter: {
    marginTop: "100px",
    backgroundColor: "#F0F8FF",
  },
  footerlinks: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  logoimg: {
    width: "50px",
    height: "50px",
    color: "white",
  },
}));

export default useFooterLearnStyles;
