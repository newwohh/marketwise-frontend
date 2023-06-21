import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useSignUp from "../../styles/SignUp/SignUp";
import { backendBaseUrl } from "../../constants/constants";

function SignUpContent() {
  const signUpClass = useSignUp();

  const [userDetails, setUserDetails] = React.useState({
    first: "",
    last: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const postNewUser = async () => {
    try {
      const request = await fetch(backendBaseUrl + "api/v1/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: userDetails.first + userDetails.last,
          email: userDetails.email,
          password: userDetails.password,
          passwordConfirm: userDetails.passwordConfirm,
        }),
        credentials: "include",
      });
      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(userDetails);

  return (
    <main style={{ backgroundColor: "#F0F8FF", height: "1000px" }}>
      <section className={signUpClass.mainsection}>
        <div style={{ marginTop: "200px" }}>
          <form className={signUpClass.form}>
            <Typography variant="h5">
              Sign Up to create,discover and connect with the global community.
            </Typography>
            <div style={{ marginTop: "20px", display: "flex" }}>
              <TextField
                type="text"
                sx={{ width: "220px", marginRight: "10px" }}
                label="First Name"
                onChange={(e) => (userDetails.first = e.target.value)}
              />
              <TextField
                type="text"
                sx={{ width: "220px" }}
                label="Last Name"
                onChange={(e) => (userDetails.last = e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="email"
                sx={{ width: "450px", marginTop: "20px" }}
                label="E-Mail"
                onChange={(e) => (userDetails.email = e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="password"
                sx={{ width: "450px", marginTop: "20px" }}
                label="Password"
                onChange={(e) => (userDetails.password = e.target.value)}
              />
              <TextField
                type="password"
                sx={{ width: "450px", marginTop: "20px" }}
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
                }}
                onClick={() => postNewUser()}
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
