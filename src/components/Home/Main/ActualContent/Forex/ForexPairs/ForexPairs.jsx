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
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        background: "linear-gradient(180deg, #0B0F19 0%, #080B11 100%)",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <Container maxWidth="lg">
        {/* Forex Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "#10B981",
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
              color: "#F8FAFC",
              letterSpacing: "-0.02em",
            }}
          >
            Currency Pairs & Crosses
          </Typography>
          <Typography variant="body2" sx={{ color: "#94A3B8", mt: 0.5 }}>
            Real-time interbank foreign exchange rates and liquid global currency pairs.
          </Typography>
        </Box>

        {/* Forex Slider */}
        {pairs.length > 0 ? (
          <Box
            sx={{
              mb: 8,
              "& .swiper-button-next, & .swiper-button-prev": {
                color: "#F8FAFC",
                backgroundColor: "rgba(15, 23, 42, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                width: 38,
                height: 38,
                borderRadius: "50%",
                backdropFilter: "blur(8px)",
                "&::after": {
                  fontSize: "0.9rem",
                  fontWeight: 700,
                },
                "&:hover": {
                  color: "#34D399",
                  backgroundColor: "rgba(30, 41, 59, 0.95)",
                  borderColor: "rgba(52, 211, 153, 0.5)",
                },
              },
            }}
          >
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
        <Box sx={{ mt: 8 }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.12em",
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
              color: "#F8FAFC",
              letterSpacing: "-0.02em",
              mb: 5,
            }}
          >
            Trader Support & Community
          </Typography>

          <Grid container spacing={3}>
            {/* Blog Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3.5,
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  backdropFilter: "blur(12px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(96, 165, 250, 0.4)",
                    boxShadow: "0 12px 28px -6px rgba(0, 0, 0, 0.5), 0 0 16px rgba(59, 130, 246, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "rgba(59, 130, 246, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#60A5FA",
                      mb: 2,
                    }}
                  >
                    <ArticleIcon />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#F8FAFC", mb: 1 }}>
                    Market Intelligence Blog
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6, mb: 3 }}>
                    Deep dives on macro policy, technical setups, and algorithmic strategies from experienced contributors.
                  </Typography>
                </CardContent>
                <Button
                  component={RouterLink}
                  to="/blogs"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    color: "#60A5FA",
                    "&:hover": { color: "#93C5FD", backgroundColor: "transparent" },
                  }}
                >
                  Read Articles
                </Button>
              </Card>
            </Grid>

            {/* FAQ Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3.5,
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  backdropFilter: "blur(12px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(52, 211, 153, 0.4)",
                    boxShadow: "0 12px 28px -6px rgba(0, 0, 0, 0.5), 0 0 16px rgba(16, 185, 129, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#34D399",
                      mb: 2,
                    }}
                  >
                    <HelpOutlineIcon />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#F8FAFC", mb: 1 }}>
                    Help Center & FAQs
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6, mb: 3 }}>
                    Got questions regarding platform capabilities, subscription plans, or simulator metrics? Check our guides.
                  </Typography>
                </CardContent>
                <Button
                  component={RouterLink}
                  to="/faq"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    color: "#34D399",
                    "&:hover": { color: "#6EE7B7", backgroundColor: "transparent" },
                  }}
                >
                  View FAQ
                </Button>
              </Card>
            </Grid>

            {/* AI Assistant Card */}
            <Grid item xs={12} md={4}>
              <Card
                sx={{
                  p: 3.5,
                  borderRadius: "16px",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  backgroundColor: "rgba(15, 23, 42, 0.65)",
                  backdropFilter: "blur(12px)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(192, 132, 252, 0.4)",
                    boxShadow: "0 12px 28px -6px rgba(0, 0, 0, 0.5), 0 0 16px rgba(168, 85, 247, 0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: "0 !important" }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "12px",
                      backgroundColor: "rgba(168, 85, 247, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#C084FC",
                      mb: 2,
                    }}
                  >
                    <SupportAgentIcon />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: "#F8FAFC", mb: 1 }}>
                    24/7 AI Market Assistant
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#94A3B8", lineHeight: 1.6, mb: 3 }}>
                    Get real-time conversational assistance on tickers, terminologies, and platform guidance whenever you need.
                  </Typography>
                </CardContent>
                <Button
                  component={RouterLink}
                  to="/chat"
                  endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
                  sx={{
                    alignSelf: "flex-start",
                    p: 0,
                    fontWeight: 700,
                    color: "#C084FC",
                    "&:hover": { color: "#D8B4FE", backgroundColor: "transparent" },
                  }}
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
