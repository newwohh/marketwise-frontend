import React, { useContext } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Box,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { MyContext } from "../../context/Context";
import { subscribeNew } from "../../api";

function OverviewPriceTable({ title, prices }) {
  const { user } = useContext(MyContext);
  const rows = Array.isArray(prices) ? prices : [];

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Table sx={{ minWidth: 680 }}>
        <TableHead sx={{ backgroundColor: "#F8FAFC" }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>ASSET</TableCell>
            <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>SYMBOL</TableCell>
            <TableCell align="right" sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>
              PRICE (USD)
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>
              {title === "Crypto" ? "24H / RANK" : "SECURITY TYPE"}
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>
              ACTIONS
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => {
            const rawPrice = row.price_usd || row.price || "0";
            const formattedPrice = Number(rawPrice).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 4,
            });
            const assetName = row.name || `Asset ${idx + 1}`;
            const symbol = row.symbol || row.ticker || "N/A";
            const chartId = row.id || symbol.toLowerCase();

            return (
              <TableRow
                key={row.id || row.name || idx}
                sx={{
                  transition: "background-color 0.15s ease",
                  "&:hover": { backgroundColor: "#F8FAFC" },
                }}
              >
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: "#0F172A" }}>
                    {assetName}
                  </Typography>
                </TableCell>

                <TableCell>
                  <Chip
                    label={symbol}
                    size="small"
                    sx={{
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      backgroundColor: "rgba(37, 99, 235, 0.08)",
                      color: "#2563EB",
                      borderRadius: "6px",
                    }}
                  />
                </TableCell>

                <TableCell align="right">
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 700, color: "#0F172A", fontFamily: "monospace" }}
                  >
                    ${formattedPrice}
                  </Typography>
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label={title === "Crypto" ? `#${row.rank || idx + 1}` : row.type || "Common Stock"}
                    size="small"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.75rem",
                      backgroundColor: "#F1F5F9",
                      color: "#475569",
                      borderRadius: "6px",
                    }}
                  />
                </TableCell>

                <TableCell align="right">
                  <Box sx={{ display: "inline-flex", gap: 1, alignItems: "center" }}>
                    <Button
                      component={RouterLink}
                      to={`/cryptocurrency/chart/${chartId}`}
                      size="small"
                      variant="outlined"
                      startIcon={<ShowChartIcon fontSize="small" />}
                      sx={{
                        borderRadius: "8px",
                        fontSize: "0.78rem",
                        borderColor: "#CBD5E1",
                        color: "#2563EB",
                        "&:hover": { borderColor: "#2563EB", backgroundColor: "rgba(37, 99, 235, 0.04)" },
                      }}
                    >
                      Chart
                    </Button>
                    {user && (
                      <Button
                        size="small"
                        variant="contained"
                        startIcon={<StarBorderIcon fontSize="small" />}
                        onClick={() => subscribeNew("market", assetName, user, rawPrice)}
                        sx={{
                          borderRadius: "8px",
                          fontSize: "0.78rem",
                          boxShadow: "none",
                        }}
                      >
                        Watch
                      </Button>
                    )}
                  </Box>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OverviewPriceTable;
