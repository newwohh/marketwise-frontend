import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip,
  InputAdornment,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CalculateIcon from "@mui/icons-material/Calculate";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";

function InvestSimulatorCalc({ data }) {
  const [quantity, setQuantity] = useState("10");
  const [years, setYears] = useState("3");
  const [expectedCagr, setExpectedCagr] = useState("15");
  const [simulationResult, setSimulationResult] = useState(null);

  const price = data && data.price ? parseFloat(data.price) : 100;
  const name = data && data.name ? data.name : "Select Asset";
  const symbol = data && data.symbol ? data.symbol : "ASSET";

  const handleCalculate = () => {
    const q = parseFloat(quantity) || 1;
    const y = parseFloat(years) || 1;
    const cagr = parseFloat(expectedCagr) || 10;

    const initialInvestment = price * q;
    // Compounding future value formula: FV = PV * (1 + r)^t
    const futureValue = initialInvestment * Math.pow(1 + cagr / 100, y);
    const netProfit = futureValue - initialInvestment;
    const totalRoi = initialInvestment > 0 ? (netProfit / initialInvestment) * 100 : 0;

    setSimulationResult({
      initial: initialInvestment,
      future: futureValue,
      profit: netProfit,
      roi: totalRoi,
      years: y,
    });
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {/* Left: Input Parameters */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3.5,
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
            }}
          >
            <CardContent sx={{ p: "0 !important" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A" }}>
                    {name}
                  </Typography>
                  <Typography variant="caption" sx={{ color: "#64748B", fontWeight: 700 }}>
                    {symbol} • Current Price: ${price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                  </Typography>
                </Box>
                <Chip
                  label={symbol}
                  size="small"
                  sx={{
                    fontWeight: 700,
                    bgcolor: "rgba(37, 99, 235, 0.08)",
                    color: "#2563EB",
                    borderRadius: "6px",
                  }}
                />
              </Box>

              <Divider sx={{ mb: 3 }} />

              <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
                <TextField
                  label="Units / Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  fullWidth
                  InputProps={{
                    startAdornment: <InputAdornment position="start">#</InputAdornment>,
                  }}
                />

                <TextField
                  label="Investment Horizon (Years)"
                  type="number"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  fullWidth
                  InputProps={{
                    endAdornment: <InputAdornment position="end">Years</InputAdornment>,
                  }}
                />

                <TextField
                  label="Expected Annual Growth (CAGR %)"
                  type="number"
                  value={expectedCagr}
                  onChange={(e) => setExpectedCagr(e.target.value)}
                  fullWidth
                  helperText="Estimated year-over-year rate of return"
                  InputProps={{
                    endAdornment: <InputAdornment position="end">%</InputAdornment>,
                  }}
                />

                <Button
                  variant="contained"
                  size="large"
                  onClick={handleCalculate}
                  startIcon={<CalculateIcon />}
                  sx={{
                    py: 1.5,
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    mt: 1,
                    background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  }}
                >
                  Calculate Future Value
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Right: Simulation Forecast Output */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3.5,
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              backgroundColor: simulationResult ? "#0B0F19" : "#FFFFFF",
              color: simulationResult ? "#FFFFFF" : "#0F172A",
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              transition: "all 0.3s ease",
            }}
          >
            <CardContent sx={{ p: "0 !important" }}>
              {simulationResult ? (
                <Box>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                    <Typography variant="caption" sx={{ color: "#94A3B8", fontWeight: 700, textTransform: "uppercase" }}>
                      Simulation Forecast Output
                    </Typography>
                    <Chip
                      icon={<TrendingUpIcon sx={{ fontSize: "14px !important", color: "#10B981" }} />}
                      label={`+${simulationResult.roi.toFixed(1)}% Total Return`}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(16, 185, 129, 0.2)",
                        color: "#34D399",
                        fontWeight: 700,
                        borderRadius: "6px",
                      }}
                    />
                  </Box>

                  <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                    Projected Portfolio Value After {simulationResult.years} Years
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 800,
                      color: "#60A5FA",
                      letterSpacing: "-0.03em",
                      my: 1.5,
                      fontSize: { xs: "2.25rem", md: "3rem" },
                    }}
                  >
                    ${simulationResult.future.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </Typography>

                  <Divider sx={{ my: 2.5, borderColor: "rgba(255, 255, 255, 0.1)" }} />

                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                        Initial Capital
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#FFFFFF" }}>
                        ${simulationResult.initial.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                        Estimated Net Gain
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 700, color: "#34D399" }}>
                        +${simulationResult.profit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "16px",
                      backgroundColor: "rgba(37, 99, 235, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      mx: "auto",
                      mb: 2,
                    }}
                  >
                    <MonetizationOnIcon sx={{ fontSize: 32 }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F172A", mb: 1 }}>
                    Ready to Forecast Returns
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", maxWidth: 320, mx: "auto" }}>
                    Configure your investment parameters on the left and click Calculate to view your compounding projection.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default InvestSimulatorCalc;
