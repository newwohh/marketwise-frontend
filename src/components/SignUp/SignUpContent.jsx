import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useSignUp from "../../styles/SignUp/SignUp";

function SignUpContent() {
  const signUpClass = useSignUp();
  return (
    <main style={{ backgroundColor: "#F0F8FF", height: "1000px" }}>
      <section className={signUpClass.mainsection}>
        <div style={{ marginTop: "200px" }}>
          <form className={signUpClass.form}>
            <Typography variant="h4">Sign-In</Typography>
            <div style={{ marginTop: "20px" }}>
              <TextField type="text" sx={{ width: "450px" }} label="username" />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                type="password"
                sx={{ width: "450px" }}
                label="password"
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
                Login
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                style={{
                  textDecoration: "none",
                  color: "#002244",
                }}
              >
                <Typography>Not Registered ? </Typography>
              </Link>
              <Link
                style={{
                  marginLeft: "30px",
                  textDecoration: "none",
                  color: "#002244",
                }}
              >
                <Typography>Forgot Password ?</Typography>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default SignUpContent;
