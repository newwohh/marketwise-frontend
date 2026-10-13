import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import MainGrow from "../components/Grow/MainGrow";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Grow() {
  useScrollToTop();
  titleHandler("Portfolio Growth");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <MainGrow />
      <Footer />
    </Box>
  );
}

export default Grow;
