import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import { getCryptoPrice } from "../../../../../../reducers/reducers";

function CryptoMarket() {
  const dispatch = useDispatch();
  const { prices } = useSelector((state) => state.marketwise);

  useEffect(() => {
    if (!prices || prices.length === 0) {
      dispatch(getCryptoPrice());
    }
  }, [dispatch, prices]);

  const rows = prices && prices.length > 0 ? prices.slice(0, 8) : [];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#0B0F19",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "flex-end" },
            gap: 2,
            mb: 4,
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#F59E0B",
                fontWeight: 700,
                display: "block",
                mb: 1,
              }}
            >
              Real-Time Order Flow
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                color: "#F8FAFC",
                letterSpacing: "-0.02em",
              }}
            >
              Top Cryptocurrencies
            </Typography>
            <Typography variant="body2" sx={{ color: "#94A3B8", mt: 0.5 }}>
              Live spot market prices, volume metrics, and 24-hour performance.
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            to="/cryptocurrency"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "10px",
              fontWeight: 600,
              color: "#F59E0B",
              borderColor: "rgba(255, 255, 255, 0.18)",
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(8px)",
              "&:hover": { borderColor: "#F59E0B", backgroundColor: "rgba(245, 158, 11, 0.15)" },
            }}
          >
            View All Markets
          </Button>
        </Box>

        {/* Clean Modern Market Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backgroundColor: "rgba(15, 23, 42, 0.75)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            overflowX: "auto",
          }}
        >
          <Table sx={{ minWidth: 680 }}>
            <TableHead sx={{ backgroundColor: "rgba(11, 15, 25, 0.85)" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", width: 70, borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  #
                </TableCell>
                <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  ASSET
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  PRICE (USD)
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  24H CHANGE
                </TableCell>
                <TableCell align="right" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  7D CHANGE
                </TableCell>
                <TableCell align="center" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  CHART
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((coin, index) => {
                const change24 = parseFloat(coin.percent_change_24h || 0);
                const change7d = parseFloat(coin.percent_change_7d || 0);
                const is24Pos = change24 >= 0;
                const is7dPos = change7d >= 0;
                const priceFormatted = Number(coin.price_usd || 0).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 4,
                });

                return (
                  <TableRow
                    key={coin.id || index}
                    sx={{
                      transition: "background-color 0.15s ease",
                      "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.45)" },
                      "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.06)" },
                    }}
                  >
                    <TableCell sx={{ color: "#94A3B8", fontWeight: 600 }}>
                      {coin.rank || index + 1}
                    </TableCell>

                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Avatar
                          sx={{
                            width: 32,
                            height: 32,
                            bgcolor: "rgba(37, 99, 235, 0.15)",
                            color: "#60A5FA",
                            fontWeight: 700,
                            fontSize: "0.8rem",
                            border: "1px solid rgba(59, 130, 246, 0.3)",
                          }}
                        >
                          {coin.symbol ? coin.symbol.slice(0, 3) : "COIN"}
                        </Avatar>
                        <Box>
                          <Typography variant="body2" sx={{ fontWeight: 700, color: "#F8FAFC" }}>
                            {coin.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 600 }}>
                            {coin.symbol}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="right">
                      <Typography
                        variant="body2"
                        sx={{ fontWeight: 700, color: "#F8FAFC", fontFamily: "monospace" }}
                      >
                        ${priceFormatted}
                      </Typography>
                    </TableCell>

                    <TableCell align="right">
                      <Chip
                        icon={
                          is24Pos ? (
                            <TrendingUpIcon sx={{ fontSize: "14px !important", color: "#10B981" }} />
                          ) : (
                            <TrendingDownIcon sx={{ fontSize: "14px !important", color: "#EF4444" }} />
                          )
                        }
                        label={`${is24Pos ? "+" : ""}${change24.toFixed(2)}%`}
                        size="small"
                        sx={{
                          backgroundColor: is24Pos ? "rgba(16, 185, 129, 0.15)" : "rgba(239, 68, 68, 0.15)",
                          color: is24Pos ? "#34D399" : "#F87171",
                          border: is24Pos ? "1px solid rgba(16, 185, 129, 0.3)" : "1px solid rgba(239, 68, 68, 0.3)",
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>

                    <TableCell align="right">
                      <Typography
                        variant="caption"
                        sx={{
                          fontWeight: 600,
                          color: is7dPos ? "#34D399" : "#F87171",
                          fontFamily: "monospace",
                        }}
                      >
                        {is7dPos ? "+" : ""}
                        {change7d.toFixed(2)}%
                      </Typography>
                    </TableCell>

                    <TableCell align="center">
                      <Button
                        component={RouterLink}
                        to={`/cryptocurrency/chart/${coin.id || coin.name.toLowerCase()}`}
                        size="small"
                        variant="text"
                        startIcon={<ShowChartIcon fontSize="small" />}
                        sx={{
                          borderRadius: "8px",
                          fontWeight: 600,
                          color: "#60A5FA",
                          "&:hover": { backgroundColor: "rgba(37, 99, 235, 0.15)" },
                        }}
                      >
                        Analyze
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
}

export default CryptoMarket;
