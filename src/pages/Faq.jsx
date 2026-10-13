import React from "react";
import { Box, Container, Typography } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import FaqAccordion from "../components/Faq/FaqAccordion";
import { faqAccordionData } from "../dev-data/data";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Faq() {
  useScrollToTop();
  titleHandler("FAQ's");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 }, flexGrow: 1 }}>
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "14px",
              backgroundColor: "rgba(37, 99, 235, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563EB",
              mx: "auto",
              mb: 2,
            }}
          >
            <HelpOutlineIcon sx={{ fontSize: 28 }} />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 1.5,
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", maxWidth: 600, mx: "auto" }}>
            Got questions regarding our market feeds, simulation tools, or pricing? Find clear answers below.
          </Typography>
        </Box>

        <Box sx={{ maxWidth: 760, mx: "auto" }}>
          {faqAccordionData.map((el, i) => (
            <FaqAccordion el={el} key={i} />
          ))}
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Faq;
