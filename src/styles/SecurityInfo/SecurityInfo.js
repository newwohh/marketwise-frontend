import { makeStyles } from "@mui/styles";

const useSecurityInfoContentStyles = makeStyles({
  securityinfofirstdiv: {
    marginTop: "60px",
    backgroundColor: "#000519",
    display: "flex",
    color: "white",
    alignItems: "center",
    padding: "100px",
    "@media (max-width:1000px)": {
      flexDirection: "column",
    },
  },
  securityinfofirstsubdiv: {
    marginTop: "100px",
  },
  securityinfoimg: {
    width: "500px",
    height: "400px",
    "@media (max-width:1000px)": {
      width: "300px",
      height: "200px",
    },
  },
  securityinfoseconddiv: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:1000px)": {
      width: "350px",
    },
  },
  securityinfosecondsubdiv: {
    width: "150vh",
    "@media (max-width:1000px)": {
      flexDirection: "column",
      width: "350px",
    },
  },
  firstcontentsecurityinfo: {
    display: "flex",
    "@media (max-width:1000px)": {
      flexDirection: "column",
      width: "350px",
    },
  },
  contentfirstsecurityinfo: {
    display: "flex",
    justifyContent: "space-between",
    margin: "50px",
    "@media (max-width:1000px)": {
      margin: 0,
      flexDirection: "column",
    },
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
    "@media (max-width:1000px)": {
      margin: 100,
    },
  },
  middledivsecurityinfosubdiv: {
    width: "800px",
  },
  lastdivsecurityinfo: {
    margin: 100,
    display: "flex",
    justifyContent: "space-evenly",
    "@media (max-width:1000px)": {
      margin: 0,
    },
  },
  securityinfocontentmain: {
    marginRight: "200px",
    "@media (max-width:1000px)": {
      margin: 0,
    },
  },
});

export default useSecurityInfoContentStyles;
