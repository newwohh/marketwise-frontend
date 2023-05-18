import { makeStyles } from "@mui/styles";

const useSecurityInfoContentStyles = makeStyles({
  securityinfofirstdiv: {
    marginTop: "60px",

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
    width: "150vh",
  },
  firstcontentsecurityinfo: {
    display: "flex",
  },
  contentfirstsecurityinfo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "50px",
  },
  contentfirstsecuritinfoimg: {
    width: "100px",
    height: "100px",
  },
  middledivsecurityinfo: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  middledivsecurityinfosubdiv: {
    width: "800px",
  },
  lastdivsecurityinfo: {
    margin: 100,
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export default useSecurityInfoContentStyles;
