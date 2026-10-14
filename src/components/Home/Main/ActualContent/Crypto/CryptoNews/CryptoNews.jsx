import React, { useEffect, useCallback } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getCryptoNews } from "../../../../../../reducers/reducers";
import CryptoNewsCard from "./CryptoNewsCard";

function CryptoNews() {
  const { news } = useSelector((state) => state.marketwise);
  const dispatch = useDispatch();

  const dispatchCryptoNews = useCallback(() => {
    dispatch(getCryptoNews());
  }, [dispatch]);

  useEffect(() => {
    dispatchCryptoNews();
  }, [dispatchCryptoNews]);

  const articles = news?.results && Array.isArray(news.results) ? news.results.slice(0, 6) : [];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#131722",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
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
              Intelligence Wire
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
              Latest Market News & Analysis
            </Typography>
            <Typography variant="body2" sx={{ color: "#94A3B8", mt: 0.5 }}>
              Curated breaking insights, macro policy shifts, and asset developments.
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
              backgroundColor: "rgba(30, 34, 45, 0.6)",
              backdropFilter: "blur(8px)",
              "&:hover": { borderColor: "#F59E0B", backgroundColor: "rgba(245, 158, 11, 0.15)" },
            }}
          >
            Full News Feed
          </Button>
        </Box>

        {/* News Grid */}
        <Grid container spacing={3}>
          {articles.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={item.article_id || index}>
              <CryptoNewsCard news={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default CryptoNews;
