import { makeStyles } from "@mui/styles";

const useMainGrowStyles = makeStyles({
  firstsection: {
    background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    border: "1px solid black",
    textAlign: "center",
  },
  introtextgrow: {
    width: "900px",
    textAlign: "center",
  },
  secondsectiongrow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    "@media (max-width:1000px)": {
      marginTop: "100px",
    },
  },
  growimg: {
    width: "350px",
    height: "300px",
    "@media (max-width:1000px)": {
      height: "200px",
      width: "250px",
    },
  },
  contentdiv: {
    left: 0,
    right: 0,
    width: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "100px",
    "@media (max-width:1000px)": {
      flexDirection: "column",
      width: "300px",
    },
  },
  infosection: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infodivgrow: {
    padding: 50,
    borderRadius: "15px",
    color: "white",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    width: "1200px",
    backgroundColor: "#5D76A9",
  },
  infosubdivgrow: {
    display: "flex",
    marginTop: "50px",
    "@media (max-width:1000px)": {
      flexDirection: "column",
      width: "250px",
      marginTop: "50px",
    },
  },
  infosubcontentdivgrow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:1000px)": {
      marginTop: "50px",
    },
  },
});

export default useMainGrowStyles;
