import { makeStyles } from "@mui/styles";

const useSignUp = makeStyles({
  signinNav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
  },
  form: {
    borderRadius: "25px",
    padding: "50px",
    border: "5px solid rgba(48, 46, 163, .2)",
    height: "400px",
    width: "650px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  mainsection: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
});

export default useSignUp;
