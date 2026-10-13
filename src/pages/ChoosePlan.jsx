import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import { plansInformation } from "../dev-data/data";
import ChoosePlanCard from "../components/ChoosePlan/ChoosePlanCard";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function ChoosePlan() {
  useScrollToTop();
  titleHandler("Subscription Plans");

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 }, flexGrow: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 650, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#2563EB",
              fontWeight: 800,
              display: "block",
              mb: 1,
            }}
          >
            Flexible Tier Access
          </Typography>
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
            Predictable Plans for Every Trader
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B" }}>
            Get access to real-time order books, interactive heatmaps, backtesting simulators, and priority community research.
          </Typography>
        </Box>

        {/* Pricing Cards Grid */}
        <Grid container spacing={3.5} alignItems="stretch">
          {plansInformation.map((plan, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <ChoosePlanCard el={plan} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

export default ChoosePlan;
