import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useSignUp from "../../styles/SignUp/SignUp";
import { postNewUser } from "../../api";

function SignUpContent() {
  const signUpClass = useSignUp;

  const [userDetails, setUserDetails] = React.useState({
    first: "",
    last: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <main style={{ backgroundColor: "#F0F8FF", height: "1000px" }}>
      <section style={signUpClass.mainsection}>
        <div style={{ marginTop: "200px" }}>
          <form style={signUpClass.form}>
            <Typography
              variant="h5"
              sx={{ "@media (max-width:1000px)": { width: "320px" } }}
            >
              Sign Up to create,discover and connect with the global community.
            </Typography>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <TextField
                type="text"
                sx={{
                  width: "220px",
                  marginRight: "10px",
                  "@media (max-width:1000px)": {
                    width: "150px",
                    marginRight: 0,
                  },
                }}
                label="First Name"
                onChange={(e) => (userDetails.first = e.target.value)}
              />
              <TextField
                type="text"
                sx={{
                  width: "220px",
                  "@media (max-width:1000px)": { width: "150px" },
                }}
                label="Last Name"
                onChange={(e) => (userDetails.last = e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="email"
                sx={{
                  width: "450px",
                  marginTop: "20px",
                  "@media (max-width:1000px)": { width: "320px" },
                }}
                label="E-Mail"
                onChange={(e) => (userDetails.email = e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="password"
                sx={{
                  width: "450px",
                  marginTop: "20px",
                  "@media (max-width:1000px)": { width: "320px" },
                }}
                label="Password"
                onChange={(e) => (userDetails.password = e.target.value)}
              />
              <TextField
                type="password"
                sx={{
                  width: "450px",
                  marginTop: "20px",
                  "@media (max-width:1000px)": { width: "320px" },
                }}
                label="Confirm Password"
                onChange={(e) => (userDetails.passwordConfirm = e.target.value)}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "50px",
              }}
            >
              <FormControlLabel
                sx={{ "@media (max-width:1000px)": { width: "320px" } }}
                required
                control={<Checkbox />}
                label="I accept the Terms of Use & Privacy Policy"
              />
            </div>
            <div>
              <Button
                sx={{
                  width: "450px",
                  height: "50px",
                  margin: "20px",
                  color: "white",
                  backgroundColor: "#002244",
                  "&:hover": {
                    border: "1px solid #002244",
                    backgroundColor: "#F0F8FF",
                    color: "#002244",
                  },
                  "@media (max-width:1000px)": { width: "200px" },
                }}
                onClick={() => postNewUser(userDetails)}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpContent;
