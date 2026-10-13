import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

function HeatmapCard({ el, isProps }) {
  if (!el) return null;

  const rawChange = isProps ? parseFloat(el.percent_change_24h || 0) : parseFloat(el.change || 0);
  const isPositive = rawChange >= 0;
  const isStrong = Math.abs(rawChange) >= 3;

  // Modern heatmap palette with dark glass tints
  let bgColor = "rgba(16, 185, 129, 0.15)";
  let borderColor = "rgba(16, 185, 129, 0.4)";
  let textColor = "#059669";

  if (!isPositive) {
    if (isStrong) {
      bgColor = "rgba(220, 38, 38, 0.2)";
      borderColor = "rgba(220, 38, 38, 0.5)";
      textColor = "#DC2626";
    } else {
      bgColor = "rgba(239, 68, 68, 0.12)";
      borderColor = "rgba(239, 68, 68, 0.35)";
      textColor = "#EF4444";
    }
  } else {
    if (isStrong) {
      bgColor = "rgba(16, 185, 129, 0.22)";
      borderColor = "rgba(16, 185, 129, 0.6)";
      textColor = "#059669";
    }
  }

  const priceVal = isProps
    ? parseFloat(el.price_usd || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 4 })
    : Number(el.price || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "16px",
        border: `1.5px solid ${borderColor}`,
        backgroundColor: bgColor,
        transition: "all 0.2s ease",
        cursor: "pointer",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
        },
      }}
    >
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <Typography variant="caption" sx={{ fontWeight: 800, color: "#0F172A", letterSpacing: "0.05em" }}>
            {el.symbol || "TICKER"}
          </Typography>
          <Chip
            icon={
              isPositive ? (
                <TrendingUpIcon sx={{ fontSize: "13px !important", color: `${textColor} !important` }} />
              ) : (
                <TrendingDownIcon sx={{ fontSize: "13px !important", color: `${textColor} !important` }} />
              )
            }
            label={`${isPositive ? "+" : ""}${rawChange.toFixed(2)}%`}
            size="small"
            sx={{
              height: 22,
              fontWeight: 800,
              fontSize: "0.72rem",
              backgroundColor: "rgba(255, 255, 255, 0.75)",
              color: textColor,
              borderRadius: "6px",
            }}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 800,
            fontSize: "1.05rem",
            color: "#0F172A",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            mb: 0.5,
          }}
        >
          {el.name || "Asset Name"}
        </Typography>

        <Typography variant="body2" sx={{ fontWeight: 700, color: "#334155", fontFamily: "monospace" }}>
          ${priceVal}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default HeatmapCard;
