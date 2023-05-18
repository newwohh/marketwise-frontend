import { makeStyles } from "@mui/styles";

const useHeaderStyles = makeStyles(() => ({
  headerintrotext: {
    "font-family": "Sofia,cursive",
  },
  headerintrodiv: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
    textAlign: "center",
  },
}));

export default useHeaderStyles;
