import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Autocomplete,
  TextField,
  Chip,
  Paper,
} from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import InvestSimulatorCalc from "../components/InvestSimulator/InvestSimulatorCalc";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";
import { getCryptoPrice } from "../reducers/reducers";

function InvestSimulator() {
  useScrollToTop();
  titleHandler("Invest Simulator");
  const dispatch = useDispatch();

  const { prices } = useSelector((state) => state.marketwise);
  const [selectedAsset, setSelectedAsset] = useState({
    name: "Bitcoin",
    symbol: "BTC",
    price: "68420.50",
    change: "3.42",
  });

  useEffect(() => {
    if (!prices || prices.length === 0) {
      dispatch(getCryptoPrice());
    }
  }, [dispatch, prices]);

  const assetOptions =
    prices && prices.length > 0
      ? prices
      : [
          { name: "Bitcoin", symbol: "BTC", price_usd: "68420.50", percent_change_7d: "3.42" },
          { name: "Ethereum", symbol: "ETH", price_usd: "3520.10", percent_change_7d: "2.18" },
          { name: "Solana", symbol: "SOL", price_usd: "182.40", percent_change_7d: "6.85" },
        ];

  const handleAssetSelect = (newValue) => {
    if (!newValue) return;
    setSelectedAsset({
      name: newValue.name,
      symbol: newValue.symbol,
      price: newValue.price_usd || "100",
      change: newValue.percent_change_7d || "5",
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, flexGrow: 1 }}>
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Chip
              icon={<CalculateIcon sx={{ fontSize: "16px !important", color: "#2563EB" }} />}
              label="Paper Trading & Compound Modeler"
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: "0.75rem",
                bgcolor: "rgba(37, 99, 235, 0.08)",
                color: "#2563EB",
                borderRadius: "6px",
              }}
            />
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 1,
            }}
          >
            Investment Simulator
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", maxWidth: 750 }}>
            Model long-term asset accumulation, test expected compounding trajectories, and experiment with capital allocation scenarios without real monetary risk.
          </Typography>
        </Box>

        {/* Ticker Selection Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            borderRadius: "18px",
            border: "1px solid #E2E8F0",
            backgroundColor: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 3,
          }}
        >
          <Box sx={{ flexGrow: 1, minWidth: 260 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: "#64748B", display: "block", mb: 0.5 }}>
              SELECT TICKER OR ASSET
            </Typography>
            <Autocomplete
              disablePortal
              options={assetOptions}
              getOptionLabel={(option) => `${option.name} (${option.symbol})`}
              defaultValue={assetOptions[0]}
              onChange={(e, val) => handleAssetSelect(val)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Search assets (e.g., Bitcoin, Ethereum)..."
                  size="small"
                  sx={{ "& .MuiOutlinedInput-root": { borderRadius: "10px" } }}
                />
              )}
            />
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 3, pl: { md: 3 }, borderLeft: { md: "1px solid #E2E8F0" } }}>
            <Box>
              <Typography variant="caption" sx={{ color: "#64748B", display: "block" }}>
                SELECTED ASSET
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#0F172A" }}>
                {selectedAsset.name} ({selectedAsset.symbol})
              </Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: "#64748B", display: "block" }}>
                SPOT PRICE
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#2563EB", fontFamily: "monospace" }}>
                ${Number(selectedAsset.price).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Calculator Component */}
        <InvestSimulatorCalc data={selectedAsset} />
      </Container>

      <Footer />
    </Box>
  );
}

export default InvestSimulator;
