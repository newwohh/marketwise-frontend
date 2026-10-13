import React from "react";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import BlogsContent from "../components/Blogs/BlogsContent";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Blogs() {
  useScrollToTop();
  titleHandler("Market Blogs");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <NavBar />
      <BlogsContent />
      <Footer />
    </Box>
  );
}

export default Blogs;
