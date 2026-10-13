import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import ContentExplore from "../components/Explore/ContentExplore";
import { titleHandler } from "../handler/titleHandler";
import { useScrollToTop } from "../actions/actions";

function Explore() {
  useScrollToTop();
  titleHandler("Explore Markets");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <ContentExplore />
      <Footer />
    </Box>
  );
}

export default Explore;
