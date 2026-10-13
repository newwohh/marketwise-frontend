import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArticleIcon from "@mui/icons-material/Article";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getForexData } from "../../../../../../reducers/reducers";
import ForexCard from "./ForexCard";

function ForexPairs() {
  const dispatch = useDispatch();
  const { forexdata } = useSelector((state) => state.marketwise);

  const getProducts = useCallback(() => dispatch(getForexData()), [dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const pairs = Array.isArray(forexdata) && forexdata.length > 0 ? forexdata : [];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Forex Header */}
        <Box sx={{ mb: 4 }}>
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
            Foreign Exchange
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 800,
              color: "#0F172A",
            }}
          >
            Currency Pairs & Crosses
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
            Real-time interbank foreign exchange rates and liquid global currency pairs.
          </Typography>
        </Box>

        {/* Forex Slider */}
        {pairs.length > 0 ? (
          <Box sx={{ mb: 8 }}>
            <Swiper
              modules={[A11y, Navigation, Autoplay]}
              navigation
              rewind
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              breakpoints={{
                640: { slidesPerView: 2 },
                960: { slidesPerView: 4 },
              }}
              style={{ paddingBottom: "10px" }}
            >
              {pairs.map((el, i) => (
                <SwiperSlide key={i}>
                  <ForexCard data={el} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        ) : null}

        {/* Support & Resource Cards */}
        <Box sx={{ mt: 6 }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#64748B",
              fontWeight: 700,
              display: "block",
              mb: 1,
              textAlign: "center",
            }}
          >
            Need Guidance?
          </Typography>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              fontWeight: 800,
              color: "#0F172A",
              mb: 4,
            }}
          >
            Trader Support & Community
          </Typography>

          <Grid container spacing={3}>
            {/* Blog Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  "&:hover": { transform: "translateY(-3px)", borderColor: "#93C5FD" },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "rgba(37, 99, 235, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      mb: 2,
                    }}
                  >
                    <ArticleIcon />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F172A", mb: 1 }}>
                    Market Intelligence Blog
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, mb: 2 }}>
                    Deep dives on macro policy, technical setups, and algorithmic strategies from experienced contributors.
                  </Typography>
                </CardContent>
                <Button
                  component={RouterLink}
                  to="/blogs"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{ alignSelf: "flex-start", p: 0, fontWeight: 700, color: "#2563EB" }}
                >
                  Read Articles
                </Button>
              </Card>
            </Grid>

            {/* FAQ Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  "&:hover": { transform: "translateY(-3px)", borderColor: "#93C5FD" },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "rgba(16, 185, 129, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10B981",
                      mb: 2,
                    }}
                  >
                    <HelpOutlineIcon />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F172A", mb: 1 }}>
                    Help Center & FAQs
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, mb: 2 }}>
                    Got questions regarding platform capabilities, subscription plans, or simulator metrics? Check our guides.
                  </Typography>
                </CardContent>
                <Button
                  component={RouterLink}
                  to="/faq"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{ alignSelf: "flex-start", p: 0, fontWeight: 700, color: "#10B981" }}
                >
                  View FAQ
                </Button>
              </Card>
            </Grid>

            {/* AI Assistant Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3,
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  backgroundColor: "#FFFFFF",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s ease",
                  "&:hover": { transform: "translateY(-3px)", borderColor: "#93C5FD" },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "rgba(139, 92, 246, 0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8B5CF6",
                      mb: 2,
                    }}
                  >
                    <SupportAgentIcon />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#0F172A", mb: 1 }}>
                    24/7 AI Market Assistant
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6, mb: 2 }}>
                    Get real-time conversational assistance on tickers, terminologies, and platform guidance whenever you need.
                  </Typography>
                </CardContent>
                <Button
                  component={RouterLink}
                  to="/chat"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{ alignSelf: "flex-start", p: 0, fontWeight: 700, color: "#8B5CF6" }}
                >
                  Chat with AI
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ForexPairs;
