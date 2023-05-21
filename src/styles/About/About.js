import { makeStyles } from "@mui/styles";

const useAbout = makeStyles({
  mainabout: {
    backgroundColor: "#F0F8FF",
    textAlign: "center",
    height: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentdiv: {
    width: "900px",
  },
  contentdivtwo: {
    padding: 50,
    textAlign: "left",
    marginTop: "150px",
    width: "500px",
    height: "350px",
    backgroundColor: "#E1EBEE",
    border: "1rem solid #aaaaff",
    borderRadius: "30px",
  },
});

export default useAbout;
