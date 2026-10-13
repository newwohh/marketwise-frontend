import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import SignInContent from "../components/SignIn/SignInContent";
import { titleHandler } from "../handler/titleHandler";

function SignIn() {
  titleHandler("Sign In");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <SignInContent />
      <Footer />
    </Box>
  );
}

export default SignIn;
