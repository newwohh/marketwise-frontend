import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InsightsIcon from "@mui/icons-material/Insights";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import { aboutData } from "../../dev-data/data";

function ContentAbout() {
  const pillars = [
    {
      icon: <SpeedIcon sx={{ fontSize: 28, color: "#2563EB" }} />,
      title: "Real-Time Precision",
      desc: "Aggregating sub-second tick feeds across major cryptocurrency and equity exchanges.",
    },
    {
      icon: <InsightsIcon sx={{ fontSize: 28, color: "#10B981" }} />,
      title: "Visual Intelligence",
      desc: "Transforming dense order book liquidity into intuitive interactive heatmaps and charts.",
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 28, color: "#8B5CF6" }} />,
      title: "Risk-Free Modeling",
      desc: "Enabling investors to backtest asset allocation scenarios without putting capital on the line.",
    },
  ];

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Hero */}
        <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Chip
            label="✦ OUR MISSION & VISION"
            size="small"
            sx={{
              fontWeight: 800,
              fontSize: "0.72rem",
              bgcolor: "rgba(37, 99, 235, 0.08)",
              color: "#2563EB",
              mb: 2,
              borderRadius: "6px",
            }}
          />
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
            Democratizing Institutional Market Data
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", lineHeight: 1.7, fontSize: "1.05rem" }}>
            MarketWise was founded to bridge the gap between institutional trading desks and individual investors. We combine real-time multi-asset intelligence, interactive heatmaps, and simulation toolsets into a clean, modern interface.
          </Typography>
        </Box>

        {/* Pillars Grid */}
        <Grid container spacing={3.5} sx={{ mb: 8 }}>
          {pillars.map((item, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card
                sx={{
                  p: 3.5,
                  borderRadius: "20px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 50,
                      height: 50,
                      borderRadius: "12px",
                      backgroundColor: "rgba(37, 99, 235, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: "#0F172A", mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6 }}>
                    {item.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detailed Notes Card */}
        <Card
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: "24px",
            border: "1px solid #E2E8F0",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.05)",
          }}
        >
          <CardContent sx={{ p: "0 !important" }}>
            <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A", mb: 2 }}>
              What Powers MarketWise
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.7, mb: 3 }}>
              Every feature on MarketWise is tuned for speed, clarity, and reliability. From real-time foreign exchange liquidity to crypto spot prices and equity dividend calendars:
            </Typography>

            <List sx={{ p: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
              {aboutData.map((el, i) => (
                <ListItem key={i} disableGutters sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: "#10B981" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={el.text}
                    primaryTypographyProps={{
                      fontSize: "0.925rem",
                      color: "#334155",
                      fontWeight: 500,
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default ContentAbout;
