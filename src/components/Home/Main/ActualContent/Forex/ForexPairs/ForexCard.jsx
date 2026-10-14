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
        border: "1px solid rgba(255, 255, 255, 0.08)",
        backgroundColor: "rgba(15, 23, 42, 0.75)",
        backdropFilter: "blur(12px)",
        p: 2.5,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 12px 24px -6px rgba(0, 0, 0, 0.6), 0 0 16px rgba(16, 185, 129, 0.12)",
          borderColor: "rgba(52, 211, 153, 0.4)",
        },
      }}
    >
      <CardContent sx={{ p: "0 !important" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#34D399",
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
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              color: "#94A3B8",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "6px",
            }}
          />
        </Box>

        <Typography variant="h5" sx={{ fontWeight: 800, color: "#F8FAFC", letterSpacing: "-0.01em", mb: 1 }}>
          {symbol}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 600 }}>
            {base}
          </Typography>
          <Typography variant="caption" sx={{ color: "#64748B" }}>
            /
          </Typography>
          <Typography variant="caption" sx={{ color: "#34D399", fontWeight: 600 }}>
            {quote}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ForexCard;
