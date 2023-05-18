import { makeStyles } from "@material-ui/core/styles";

const useExploreContent = makeStyles((theme) => ({
  sectionexplore: {
    background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
    height: "1000px",
  },
  titledivexplore: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center",
    color: "white",
  },
  secondsection: {
    height: "1000px",
    width: "100%",
    // backgroundColor: "#09203f",
  },
}));

export default useExploreContent;
