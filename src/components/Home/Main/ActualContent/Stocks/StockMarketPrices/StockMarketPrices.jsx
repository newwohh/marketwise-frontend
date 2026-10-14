import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
  Chip,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getStockPrice } from "../../../../../../reducers/reducers";

function StockMarketPrices() {
  const [activeTab, setActiveTab] = useState(0);
  const dispatch = useDispatch();
  const stockprice = useSelector((state) => state.marketwise.stockprice);

  const fetchStockPrices = useCallback(() => {
    dispatch(getStockPrice());
  }, [dispatch]);

  useEffect(() => {
    fetchStockPrices();
  }, [fetchStockPrices]);

  const tickers =
    stockprice && stockprice[0]?.results
      ? stockprice[0].results.slice(0, 10)
      : [
          { name: "Apple Inc.", ticker: "AAPL", currency_name: "USD", primary_exchange: "NASDAQ", locale: "US" },
          { name: "Microsoft Corporation", ticker: "MSFT", currency_name: "USD", primary_exchange: "NASDAQ", locale: "US" },
          { name: "NVIDIA Corporation", ticker: "NVDA", currency_name: "USD", primary_exchange: "NASDAQ", locale: "US" },
          { name: "Alphabet Inc.", ticker: "GOOGL", currency_name: "USD", primary_exchange: "NASDAQ", locale: "US" },
          { name: "Amazon.com Inc.", ticker: "AMZN", currency_name: "USD", primary_exchange: "NASDAQ", locale: "US" },
          { name: "Tesla Inc.", ticker: "TSLA", currency_name: "USD", primary_exchange: "NASDAQ", locale: "US" },
        ];

  const exchanges =
    stockprice && stockprice[1]?.results
      ? stockprice[1].results.slice(0, 10)
      : [
          { name: "New York Stock Exchange", mic: "XNYS", locale: "US", operating_mic: "XNYS" },
          { name: "Nasdaq Stock Market", mic: "XNAS", locale: "US", operating_mic: "XNAS" },
          { name: "London Stock Exchange", mic: "XLON", locale: "GB", operating_mic: "XLON" },
          { name: "Tokyo Stock Exchange", mic: "XJPX", locale: "JP", operating_mic: "XJPX" },
        ];

  const dividends =
    stockprice && stockprice[2]?.results
      ? stockprice[2].results.slice(0, 10)
      : [
          { ticker: "JNJ", cash_amount: "1.24", frequency: 4, pay_date: "2024-09-10" },
          { ticker: "PG", cash_amount: "1.01", frequency: 4, pay_date: "2024-08-15" },
          { ticker: "KO", cash_amount: "0.48", frequency: 4, pay_date: "2024-10-01" },
          { ticker: "PFE", cash_amount: "0.42", frequency: 4, pay_date: "2024-09-03" },
        ];

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
                color: "#60A5FA",
                fontWeight: 700,
                display: "block",
                mb: 1,
              }}
            >
              Institutional Directory
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
              Global Equities & Exchanges
            </Typography>
            <Typography variant="body2" sx={{ color: "#94A3B8", mt: 0.5 }}>
              Active company listings, global exchanges, and corporate dividend streams.
            </Typography>
          </Box>

          <Button
            component={RouterLink}
            to="/stocks"
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: "10px",
              fontWeight: 600,
              color: "#60A5FA",
              borderColor: "rgba(255, 255, 255, 0.18)",
              backgroundColor: "rgba(15, 23, 42, 0.6)",
              backdropFilter: "blur(8px)",
              "&:hover": { borderColor: "#60A5FA", backgroundColor: "rgba(37, 99, 235, 0.15)" },
            }}
          >
            Explore Stock Hub
          </Button>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "rgba(255, 255, 255, 0.08)", mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={(e, val) => setActiveTab(val)}
            sx={{
              "& .MuiTab-root": {
                fontWeight: 600,
                textTransform: "none",
                fontSize: "0.95rem",
                color: "#94A3B8",
                "&.Mui-selected": { color: "#60A5FA" },
              },
              "& .MuiTabs-indicator": { backgroundColor: "#60A5FA" },
            }}
          >
            <Tab label="Featured Tickers" />
            <Tab label="Global Exchanges" />
            <Tab label="Dividend Announcements" />
          </Tabs>
        </Box>

        {/* Tab 0: Tickers */}
        {activeTab === 0 && (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "rgba(11, 15, 25, 0.85)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>COMPANY</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>TICKER</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>EXCHANGE</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>REGION</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>CURRENCY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickers.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      transition: "background-color 0.15s",
                      "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.45)" },
                      "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.06)" },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 700, color: "#F8FAFC" }}>
                      {row.name || "Company Listing"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={row.ticker || "TICKER"}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          backgroundColor: "rgba(37, 99, 235, 0.15)",
                          color: "#60A5FA",
                          borderRadius: "6px",
                          border: "1px solid rgba(59, 130, 246, 0.3)",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: "#94A3B8", fontWeight: 600 }}>
                      {row.primary_exchange || "GLOBAL"}
                    </TableCell>
                    <TableCell sx={{ color: "#94A3B8" }}>
                      {row.locale ? row.locale.toUpperCase() : "US"}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: "#F8FAFC" }}>
                      {row.currency_name ? row.currency_name.toUpperCase() : "USD"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Tab 1: Exchanges */}
        {activeTab === 1 && (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "rgba(11, 15, 25, 0.85)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>EXCHANGE NAME</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>MIC CODE</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>OPERATING MIC</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>JURISDICTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exchanges.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      transition: "background-color 0.15s",
                      "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.45)" },
                      "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.06)" },
                    }}
                  >
                    <TableCell sx={{ fontWeight: 700, color: "#F8FAFC" }}>
                      {row.name || "Stock Exchange"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={row.mic || "MIC"}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          color: "#CBD5E1",
                          borderRadius: "6px",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: "#94A3B8" }}>
                      {row.operating_mic || row.mic || "N/A"}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: "#F8FAFC" }}>
                      {row.locale ? row.locale.toUpperCase() : "GLOBAL"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}

        {/* Tab 2: Dividends */}
        {activeTab === 2 && (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "rgba(11, 15, 25, 0.85)" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>SECURITY TICKER</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>DIVIDEND (CASH)</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>PAYMENT FREQUENCY</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: "#94A3B8", fontSize: "0.8rem", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>PAY DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dividends.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{
                      transition: "background-color 0.15s",
                      "&:hover": { backgroundColor: "rgba(30, 41, 59, 0.45)" },
                      "& td": { borderBottom: "1px solid rgba(255, 255, 255, 0.06)" },
                    }}
                  >
                    <TableCell>
                      <Chip
                        label={row.ticker || "DIV"}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          backgroundColor: "rgba(16, 185, 129, 0.15)",
                          color: "#34D399",
                          borderRadius: "6px",
                          border: "1px solid rgba(16, 185, 129, 0.3)",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "#34D399", fontFamily: "monospace" }}>
                      ${row.cash_amount || "0.00"}
                    </TableCell>
                    <TableCell sx={{ color: "#94A3B8" }}>
                      {row.frequency ? `${row.frequency}x / Year` : "Quarterly"}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#94A3B8", fontWeight: 600 }}>
                      {row.pay_date || "Announced"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </Box>
  );
}

export default StockMarketPrices;
