import React, { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import dataReal from "../../assets/2210.i039.005.S.m004.c13.data economy isometric.jpg";
import bgrowth from "../../assets/sl_033020_29450_24.jpg";
import research from "../../assets/MyApril6.jpg";
import education from "../../assets/5836.jpg";
import { growData } from "../../dev-data/data";

const imgArr = [dataReal, bgrowth, research, education];

function MainGrow() {
  const refGrow = useRef(null);

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 6, md: 10 } }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              bgcolor: "rgba(37, 99, 235, 0.08)",
              color: "#2563EB",
              px: 2,
              py: 0.75,
              borderRadius: "50px",
              fontWeight: 700,
              fontSize: "0.8rem",
              mb: 2,
            }}
          >
            <TrendingUpIcon sx={{ fontSize: 18 }} />
            ACCELERATE YOUR TRADING EDGE
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.1rem", md: "3rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            Grow Your Capital with MarketWise
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", lineHeight: 1.7, fontSize: "1.05rem", mb: 3 }}>
            Structured intelligence tools, risk modeling calculators, and educational tracks engineered to help you execute with confidence.
          </Typography>
          <Button
            variant="outlined"
            size="large"
            onClick={() => refGrow.current?.scrollIntoView({ behavior: "smooth" })}
            endIcon={<ArrowDownwardIcon />}
            sx={{
              borderRadius: "12px",
              fontWeight: 700,
              color: "#2563EB",
              borderColor: "#CBD5E1",
              px: 3,
            }}
          >
            Explore Growth Pillars
          </Button>
        </Box>

        {/* 4 Alternating Feature Cards */}
        <Box ref={refGrow} sx={{ display: "flex", flexDirection: "column", gap: 5, mb: 10 }}>
          {growData.slice(0, 4).map((el, i) => (
            <Card
              key={i}
              sx={{
                borderRadius: "24px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                overflow: "hidden",
                boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Grid
                container
                alignItems="center"
                direction={i % 2 === 0 ? "row" : { xs: "column", md: "row-reverse" }}
              >
                <Grid item xs={12} md={5}>
                  <CardMedia
                    component="img"
                    image={imgArr[i]}
                    alt={el.title}
                    sx={{
                      height: { xs: 240, md: 320 },
                      objectFit: "cover",
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={7} sx={{ p: { xs: 3, md: 5 } }}>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A", mb: 2, fontSize: { xs: "1.5rem", md: "1.85rem" } }}>
                    {el.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#64748B", lineHeight: 1.7, fontSize: "1rem" }}>
                    {el.description}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Box>

        {/* Bottom Takeaways Grid */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: "24px",
            backgroundColor: "#0B0F19",
            color: "#FFFFFF",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 4, textAlign: "center" }}>
            The Principles Behind Consistent Growth
          </Typography>
          <Grid container spacing={3.5}>
            {growData.slice(4, 7).map((el, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Box
                  sx={{
                    p: 3,
                    borderRadius: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    height: "100%",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#60A5FA", mb: 1 }}>
                    {el.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6 }}>
                    {el.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default MainGrow;
