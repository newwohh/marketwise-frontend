import { makeStyles } from "@mui/styles";

const useHeaderGrowStyles = makeStyles({
  navbargrow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logogrow: {
    width: "50px",
    height: "50px",
    color: "white",
  },
  headersubdiv: {
    display: "flex",
    marginLeft: "30px",
  },
});

export default useHeaderGrowStyles;
