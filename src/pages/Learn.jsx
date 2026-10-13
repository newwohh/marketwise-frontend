import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import ContentLearn from "../components/Learn/ContentLearn/ContentLearn";
import { titleHandler } from "../handler/titleHandler";
import { useScrollToTop } from "../actions/actions";

function Learn() {
  titleHandler("Trading Academy");
  useScrollToTop();

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <ContentLearn />
      <Footer />
    </Box>
  );
}

export default Learn;
