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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function SecurityInfoContent() {
  const securityPillars = [
    {
      icon: <HttpsOutlinedIcon sx={{ fontSize: 28, color: "#2563EB" }} />,
      title: "End-to-End Encryption",
      desc: "All network traffic is encrypted in transit using industry-standard TLS 1.3 protocols, protecting session tokens and API queries.",
    },
    {
      icon: <ShieldOutlinedIcon sx={{ fontSize: 28, color: "#10B981" }} />,
      title: "Non-Custodial Architecture",
      desc: "MarketWise operates as a pure data aggregation and analytics platform. We never hold your private keys or custody trading funds.",
    },
    {
      icon: <KeyOutlinedIcon sx={{ fontSize: 28, color: "#8B5CF6" }} />,
      title: "Secure Credential Storage",
      desc: "User profiles and passwords are hash-protected with cryptographic salt schemes, ensuring accounts remain tamper-resistant.",
    },
    {
      icon: <LockOutlinedIcon sx={{ fontSize: 28, color: "#F59E0B" }} />,
      title: "Audited Feed Validation",
      desc: "Market quotes and order books undergo anomaly screening to prevent bad data injections, flash pricing errors, or spoofing artifacts.",
    },
  ];

  const commitments = [
    "Strict separation between user credential storage and third-party analytics telemetry.",
    "No commercial selling or brokering of individual trader portfolio habits or search history.",
    "Hardened session management with automated token revocation upon logout.",
    "Continuous automated dependency scanning and rapid vulnerability patch cycles.",
  ];

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 720, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Chip
            icon={<ShieldOutlinedIcon sx={{ fontSize: "16px !important", color: "#10B981" }} />}
            label="SECURITY & PRIVACY COMMITMENT"
            size="small"
            sx={{
              fontWeight: 800,
              fontSize: "0.72rem",
              bgcolor: "rgba(16, 185, 129, 0.1)",
              color: "#059669",
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
            How MarketWise Protects You
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", lineHeight: 1.7, fontSize: "1.05rem" }}>
            Transparency and platform safety are core to our engineering standards. Learn how we safeguard your data, enforce encryption, and protect market integrity.
          </Typography>
        </Box>

        {/* 4 Pillars Grid */}
        <Grid container spacing={3.5} sx={{ mb: 8 }}>
          {securityPillars.map((item, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
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

        {/* Commitments Card */}
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
              Platform Security Checklist
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.7, mb: 3 }}>
              Every feature deployed to MarketWise adheres to our internal data protection standard:
            </Typography>

            <List sx={{ p: 0, display: "flex", flexDirection: "column", gap: 1.5 }}>
              {commitments.map((text, i) => (
                <ListItem key={i} disableGutters sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: "#10B981" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
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

export default SecurityInfoContent;
