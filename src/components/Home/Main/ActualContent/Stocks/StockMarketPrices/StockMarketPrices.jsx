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
        backgroundColor: "#F8FAFC",
        borderBottom: "1px solid #E2E8F0",
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
                letterSpacing: "0.1em",
                color: "#2563EB",
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
                color: "#0F172A",
              }}
            >
              Global Equities & Exchanges
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
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
              color: "#2563EB",
              borderColor: "#CBD5E1",
              backgroundColor: "#FFFFFF",
              "&:hover": { borderColor: "#2563EB", backgroundColor: "rgba(37, 99, 235, 0.04)" },
            }}
          >
            Explore Stock Hub
          </Button>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
          <Tabs
            value={activeTab}
            onChange={(e, val) => setActiveTab(val)}
            textColor="primary"
            indicatorColor="primary"
          >
            <Tab label="Featured Tickers" sx={{ fontWeight: 600, textTransform: "none", fontSize: "0.95rem" }} />
            <Tab label="Global Exchanges" sx={{ fontWeight: 600, textTransform: "none", fontSize: "0.95rem" }} />
            <Tab label="Dividend Announcements" sx={{ fontWeight: 600, textTransform: "none", fontSize: "0.95rem" }} />
          </Tabs>
        </Box>

        {/* Tab 0: Tickers */}
        {activeTab === 0 && (
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              borderRadius: "16px",
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "#F1F5F9" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>COMPANY</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>TICKER</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>EXCHANGE</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>REGION</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>CURRENCY</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tickers.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ transition: "background-color 0.15s", "&:hover": { backgroundColor: "#F8FAFC" } }}
                  >
                    <TableCell sx={{ fontWeight: 700, color: "#0F172A" }}>
                      {row.name || "Company Listing"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={row.ticker || "TICKER"}
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
                    <TableCell sx={{ color: "#64748B", fontWeight: 600 }}>
                      {row.primary_exchange || "GLOBAL"}
                    </TableCell>
                    <TableCell sx={{ color: "#64748B" }}>
                      {row.locale ? row.locale.toUpperCase() : "US"}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: "#0F172A" }}>
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
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "#F1F5F9" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>EXCHANGE NAME</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>MIC CODE</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>OPERATING MIC</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>JURISDICTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {exchanges.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ transition: "background-color 0.15s", "&:hover": { backgroundColor: "#F8FAFC" } }}
                  >
                    <TableCell sx={{ fontWeight: 700, color: "#0F172A" }}>
                      {row.name || "Stock Exchange"}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={row.mic || "MIC"}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          backgroundColor: "#F1F5F9",
                          color: "#475569",
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ color: "#64748B" }}>
                      {row.operating_mic || row.mic || "N/A"}
                    </TableCell>
                    <TableCell align="right" sx={{ fontWeight: 600, color: "#0F172A" }}>
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
              border: "1px solid #E2E8F0",
              backgroundColor: "#FFFFFF",
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead sx={{ backgroundColor: "#F1F5F9" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>SECURITY TICKER</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>DIVIDEND (CASH)</TableCell>
                  <TableCell sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>PAYMENT FREQUENCY</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 700, color: "#475569", fontSize: "0.8rem" }}>PAY DATE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dividends.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ transition: "background-color 0.15s", "&:hover": { backgroundColor: "#F8FAFC" } }}
                  >
                    <TableCell>
                      <Chip
                        label={row.ticker || "DIV"}
                        size="small"
                        sx={{
                          fontWeight: 700,
                          fontSize: "0.75rem",
                          backgroundColor: "rgba(16, 185, 129, 0.1)",
                          color: "#059669",
                          borderRadius: "6px",
                        }}
                      />
                    </TableCell>
                    <TableCell sx={{ fontWeight: 700, color: "#0F172A", fontFamily: "monospace" }}>
                      ${row.cash_amount || "0.00"}
                    </TableCell>
                    <TableCell sx={{ color: "#64748B" }}>
                      {row.frequency ? `${row.frequency}x / Year` : "Quarterly"}
                    </TableCell>
                    <TableCell align="right" sx={{ color: "#64748B", fontWeight: 600 }}>
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
