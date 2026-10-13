import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import SignUpContent from "../components/SignUp/SignUpContent";
import { titleHandler } from "../handler/titleHandler";

function SignUp() {
  titleHandler("Sign Up");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <SignUpContent />
      <Footer />
    </Box>
  );
}

export default SignUp;
