import { makeStyles } from "@mui/styles";

const useSecurityInfoContentStyles = makeStyles({
  securityinfofirstdiv: {
    marginTop: "100px",

    backgroundColor: "#000519",
    display: "flex",
    color: "white",
    alignItems: "center",
    padding: "100px",
  },
  securityinfofirstsubdiv: {
    marginTop: "100px",
  },
  securityinfoimg: {
    width: "500px",
    height: "400px",
  },
  securityinfoseconddiv: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  securityinfosecondsubdiv: {
    width: "800px",
  },
  firstcontentsecurityinfo: {
    display: "flex",
    justifyContent: "space-between",
  },
  contentfirstsecurityinfo: {
    display: "flex",
  },
  contentfirstsecuritinfoimg: {
    width: "100px",
    height: "100px",
  },
});

export default useSecurityInfoContentStyles;
