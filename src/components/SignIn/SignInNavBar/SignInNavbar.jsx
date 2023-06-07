import { AppBar, Button } from "@mui/material";
import React from "react";
import logo from "../../../assets/profit(1).png";
import useSignIn from "../../../styles/SignIn/SignInStyles";

function SignInNavbar() {
  const signInClass = useSignIn();
  return (
    <header>
      <nav>
        <AppBar
          sx={{
            backgroundColor: "#F0F8FF",
            boxShadow: "none",
            padding: "20px",
          }}
        >
          <div className={signInClass.signinNav}>
            <div>
              <img
                src={logo}
                alt="logo"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <div>
              <Button sx={{ color: "black", marginRight: "30px" }}>
                Get Started
              </Button>
              <Button sx={{ color: "black" }}>Sign up</Button>
            </div>
          </div>
        </AppBar>
      </nav>
    </header>
  );
}

export default SignInNavbar;
