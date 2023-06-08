import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import useSignUp from "../../styles/SignUp/SignUp";

function SignUpContent() {
  const signUpClass = useSignUp();
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
              />
              <TextField
                type="text"
                sx={{ width: "220px" }}
                label="Last Name"
              />
            </div>
            <div>
              <TextField
                type="email"
                sx={{ width: "450px", marginTop: "20px" }}
                label="E-Mail"
              />
            </div>
            <div>
              <TextField
                type="password"
                sx={{ width: "450px", marginTop: "20px" }}
                label="Password"
              />
              <TextField
                type="password"
                sx={{ width: "450px", marginTop: "20px" }}
                label="Confirm Password"
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
