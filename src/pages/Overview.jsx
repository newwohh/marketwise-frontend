import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Divider,
  Chip,
} from "@mui/material";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import OverviewNewsCard from "../components/Overview/OverviewNewsCard";
import OverviewPriceTable from "../components/Overview/OverviewPriceTable";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Overview(props) {
  useScrollToTop();
  const [activeTab, setActiveTab] = useState(0);

  const isCrypto = Boolean(props.crypto);
  const pageTitle = isCrypto ? "Cryptocurrency" : "Stock Market";
  titleHandler(`${pageTitle} Overview`);

  let prices = [];
  let news = [];
  let aboutText = "";

  if (isCrypto) {
    prices = props.crypto || [];
    news = props.cryptonews?.results || [];
    aboutText =
      "Cryptocurrencies operate on distributed public ledger technologies, securing transactions through modern cryptography. As decentralized digital currencies and smart-contract networks, their market capitalizations and spot order books react dynamically to global liquidity cycles.";
  } else {
    prices = props.stocks && props.stocks[0] ? props.stocks[0].results || [] : [];
    news = props.stocknews || [];
    aboutText =
      "Public equity securities represent proportional fractional ownership in global enterprises. Traded across major exchanges like the NYSE and NASDAQ, equities reflect corporate fundamentals, forward earnings multiples, and macro market conditions.";
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 }, flexGrow: 1 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Chip
              icon={
                isCrypto ? (
                  <CurrencyBitcoinIcon sx={{ fontSize: "16px !important", color: "#F59E0B" }} />
                ) : (
                  <ShowChartIcon sx={{ fontSize: "16px !important", color: "#10B981" }} />
                )
              }
              label={isCrypto ? "Digital Assets Hub" : "Global Equities Hub"}
              size="small"
              sx={{
                fontWeight: 700,
                fontSize: "0.75rem",
                backgroundColor: isCrypto ? "rgba(245, 158, 11, 0.1)" : "rgba(16, 185, 129, 0.1)",
                color: isCrypto ? "#D97706" : "#059669",
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
            }}
          >
            {pageTitle} Overview
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", mt: 0.5, maxWidth: 800 }}>
            Real-time market depth, live spot valuations, and latest news headlines updated 24/7.
          </Typography>
        </Box>

        {/* Content Layout with Main and Sidebar */}
        <Grid container spacing={4}>
          <Grid item xs={12} lg={8.5}>
            {/* Tabs */}
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3 }}>
              <Tabs
                value={activeTab}
                onChange={(e, val) => setActiveTab(val)}
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab
                  label={`Live ${pageTitle} Quotes`}
                  sx={{ fontWeight: 700, textTransform: "none", fontSize: "0.95rem" }}
                />
                <Tab
                  label="Latest Market News"
                  sx={{ fontWeight: 700, textTransform: "none", fontSize: "0.95rem" }}
                />
              </Tabs>
            </Box>

            {/* Tab 0: Price Table */}
            {activeTab === 0 && (
              <Box>
                <OverviewPriceTable title={isCrypto ? "Crypto" : "Stocks"} prices={prices} />
              </Box>
            )}

            {/* Tab 1: News Grid */}
            {activeTab === 1 && (
              <Grid container spacing={3}>
                {news.map((item, idx) => (
                  <Grid item xs={12} sm={6} key={item.article_id || idx}>
                    <OverviewNewsCard el={item} />
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>

          {/* Right Sidebar: Market Intel */}
          <Grid item xs={12} lg={3.5}>
            <Card
              sx={{
                p: 3.5,
                borderRadius: "18px",
                border: "1px solid #E2E8F0",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
                position: { lg: "sticky" },
                top: { lg: 100 },
              }}
            >
              <CardContent sx={{ p: "0 !important" }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "#0F172A", mb: 1 }}>
                  Market Intelligence Brief
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.7, mb: 3 }}>
                  {aboutText}
                </Typography>

                <Box sx={{ p: 2, borderRadius: "12px", backgroundColor: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <Typography variant="caption" sx={{ fontWeight: 700, color: "#2563EB", textTransform: "uppercase" }}>
                    Pro Tip
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5, fontSize: "0.825rem" }}>
                    Use the Chart button on any quote row to view deep technical indicators and historical price action.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}

Overview.propTypes = {
  crypto: PropTypes.array,
  cryptonews: PropTypes.object,
  stocks: PropTypes.array,
  stocknews: PropTypes.array,
};

export default Overview;
