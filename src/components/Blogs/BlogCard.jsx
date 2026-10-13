import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function BlogCard({ title, description, author = "MarketWise Desk" }) {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "18px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        p: 3,
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px -6px rgba(0, 0, 0, 0.08)",
          borderColor: "#93C5FD",
        },
      }}
    >
      <CardContent sx={{ p: "0 !important" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Chip
            label="Market Insight"
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: "0.7rem",
              bgcolor: "rgba(37, 99, 235, 0.08)",
              color: "#2563EB",
              borderRadius: "6px",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#94A3B8" }}>
            <AccessTimeIcon sx={{ fontSize: 13 }} />
            <Typography variant="caption">4 min read</Typography>
          </Box>
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            color: "#0F172A",
            fontSize: "1.1rem",
            lineHeight: 1.4,
            mb: 1.5,
          }}
        >
          {title || "Market Analysis & Forecast"}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#64748B",
            lineHeight: 1.6,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            mb: 2,
          }}
        >
          {description || "Explore market cycle dynamics, volatility metrics, and technical asset setups."}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 0, pt: 2, borderTop: "1px solid #F1F5F9" }}>
        <Button
          size="small"
          endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
          sx={{
            p: 0,
            fontWeight: 700,
            color: "#2563EB",
            fontSize: "0.85rem",
            "&:hover": { bgcolor: "transparent", color: "#1D4ED8" },
          }}
        >
          Read Article
        </Button>
      </CardActions>
    </Card>
  );
}

export default BlogCard;
