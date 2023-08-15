import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useSignIn from "../../styles/SignIn/SignInStyles";
import { signInAUser } from "../../api";

function SignInContent() {
  const signInClass = useSignIn;
  const navigation = useNavigate();
  let userDetails = { email: "", password: "" };

  const getUser = () => {};

  return (
    <main style={{ backgroundColor: "#F0F8FF", height: "1000px" }}>
      <Box sx={signInClass.mainsection}>
        <div style={{ marginTop: "200px" }}>
          <form style={signInClass.form}>
            <Typography variant="h4">Sign-In</Typography>
            <div style={{ marginTop: "20px" }}>
              <TextField
                type="text"
                sx={{
                  width: "450px",
                  "@media (max-width:1000px)": { width: "300px" },
                }}
                label="username"
                onChange={(e) => (userDetails.email = e.target.value)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                type="password"
                sx={{
                  width: "450px",
                  "@media (max-width:1000px)": { width: "300px" },
                }}
                label="password"
                onChange={(e) => (userDetails.password = e.target.value)}
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
                  "@media (max-width:1000px)": {
                    width: "150px",
                    height: "40px",
                  },
                }}
                onClick={() => signInAUser(userDetails, navigation)}
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
                to="/sign-up"
                style={{
                  textDecoration: "none",
                  color: "#002244",
                }}
              >
                <Typography
                  sx={{
                    "@media (max-width:1000px)": { fontSize: "13px" },
                  }}
                >
                  Not Registered ?{" "}
                </Typography>
              </Link>
              <Link
                style={{
                  marginLeft: "30px",
                  textDecoration: "none",
                  color: "#002244",
                }}
                onClick={() => getUser()}
              >
                <Typography
                  sx={{
                    "@media (max-width:1000px)": { fontSize: "13px" },
                  }}
                >
                  Forgot Password ?
                </Typography>
              </Link>
            </div>
          </form>
        </div>
      </Box>
    </main>
  );
}

export default SignInContent;
