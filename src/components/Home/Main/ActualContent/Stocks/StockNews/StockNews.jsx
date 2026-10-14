import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { getStockNews } from "../../../../../../reducers/reducers";
import StockNewsCard from "./StockNewsCard";

function StockNews() {
  const dispatch = useDispatch();
  const { stocknews } = useSelector((state) => state.marketwise);

  const fetchNews = useCallback(() => {
    dispatch(getStockNews());
  }, [dispatch]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  const articles = Array.isArray(stocknews) ? stocknews.slice(0, 6) : [];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: "#0E1424",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
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
              Equity Wire
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
              Stock Market Headlines
            </Typography>
            <Typography variant="body2" sx={{ color: "#94A3B8", mt: 0.5 }}>
              Earnings releases, institutional movements, and global business headlines.
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
            All Equities
          </Button>
        </Box>

        <Grid container spacing={3}>
          {articles.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <StockNewsCard el={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default StockNews;
