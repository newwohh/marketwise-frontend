import { makeStyles } from "@mui/styles";

const useLearnContentStyles = makeStyles({
  mains: {
    color: "black",
    width: "100%",
    overflow: "none",
  },
  titledivlearn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "none",
    background: "linear-gradient(to top, #09203f 0%, #537895 100%)",
    color: "white",
    "@media (max-width:1000px)": {
      flexDirection: "column",
    },
  },
  introdiv: {
    width: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "100px",
    overflow: "none",
    "@media (max-width:1000px)": {
      width: "300px",
    },
  },
  learncontentdiv: {
    marginTop: "100px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  whatistrading: {
    width: 900,
    "@media (max-width:1000px)": {
      width: "300px",
    },
  },
  learnread: {
    width: 900,
    marginTop: "100px",
    "@media (max-width:1000px)": {
      width: "300px",
    },
  },
  tradingacc: {
    marginTop: "100px",
    width: 900,
    lineHeight: "30px",
    "@media (max-width:1000px)": {
      width: "300px",
    },
  },
});

export default useLearnContentStyles;
