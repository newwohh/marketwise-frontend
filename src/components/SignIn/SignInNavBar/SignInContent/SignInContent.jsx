import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useSignIn from "../../../../styles/SignIn/SignInStyles";
import { backendBaseUrl } from "../../../../constants/constants";
import secureLocalStorage from "react-secure-storage";

function SignInContent() {
  const signInClass = useSignIn();
  let userDetails = { email: "", password: "" };
  const signInAUser = async () => {
    try {
      const request = await fetch(backendBaseUrl + "api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userDetails.email,
          password: userDetails.password,
        }),
        credentials: "include",
      });

      const response = await request.json();
      return secureLocalStorage.setItem(
        "user",
        JSON.stringify({ ...response.data })
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = () => {};

  return (
    <main style={{ backgroundColor: "#F0F8FF", height: "1000px" }}>
      <section className={signInClass.mainsection}>
        <div style={{ marginTop: "200px" }}>
          <form className={signInClass.form}>
            <Typography variant="h4">Sign-In</Typography>
            <div style={{ marginTop: "20px" }}>
              <TextField
                type="text"
                sx={{ width: "450px" }}
                label="username"
                onChange={(e) => (userDetails.email = e.target.value)}
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <TextField
                type="password"
                sx={{ width: "450px" }}
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
                }}
                onClick={() => signInAUser()}
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
                <Typography>Not Registered ? </Typography>
              </Link>
              <Link
                style={{
                  marginLeft: "30px",
                  textDecoration: "none",
                  color: "#002244",
                }}
                onClick={() => getUser()}
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

export default SignInContent;
