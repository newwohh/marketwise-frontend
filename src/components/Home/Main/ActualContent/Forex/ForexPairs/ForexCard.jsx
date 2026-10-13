import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function ForexCard({ data }) {
  if (!data) return null;

  const symbol = data.symbol || "EUR/USD";
  const group = data.currency_group || "Major FX";
  const base = data.currency_base || "Base";
  const quote = data.currency_quote || "Quote";

  return (
    <Card
      sx={{
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        p: 2.5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.08)",
          borderColor: "#93C5FD",
        },
      }}
    >
      <CardContent sx={{ p: "0 !important" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "10px",
              backgroundColor: "rgba(37, 99, 235, 0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563EB",
            }}
          >
            <CurrencyExchangeIcon fontSize="small" />
          </Box>
          <Chip
            label={group}
            size="small"
            sx={{
              fontSize: "0.7rem",
              fontWeight: 700,
              backgroundColor: "#F1F5F9",
              color: "#475569",
              borderRadius: "6px",
            }}
          />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A", letterSpacing: "-0.01em", mb: 1 }}>
          {symbol}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>
            {base}
          </Typography>
          <Typography variant="caption" sx={{ color: "#CBD5E1" }}>
            /
          </Typography>
          <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 600 }}>
            {quote}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ForexCard;
