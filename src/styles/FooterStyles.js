import { makeStyles } from "@mui/styles";

const useFooterStyles = makeStyles(() => ({
  footer: {
    marginTop: 200,
  },
  footercontainter: {
    backgroundColor: "blue",
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

export default useFooterStyles;
