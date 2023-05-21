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
    backgroundColor: "#F0F8FF",
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
    borderRadius: "23px",
    padding: "35px",
    display: "flex",
    justifyContent: "space-between",
    margin: "50px",
    backgroundColor: "white",
    border: "2px solid #aaaaff",
    borderImage:
      "repeating-linear-gradient(45deg, transparent, transparent 5px, $accentColor 6px, $accentColor 15px, transparent 16px, transparent 20px) 20/1rem",
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
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#F0F8FF",
    "@media (max-width:1000px)": {
      margin: 100,
    },
  },
  middledivsecurityinfosubdiv: {
    width: "800px",
  },
  lastdivsecurityinfo: {
    backgroundColor: "#F0F8FF",
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
