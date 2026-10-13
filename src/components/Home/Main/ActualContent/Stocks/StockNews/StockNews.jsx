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
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid #E2E8F0",
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
                letterSpacing: "0.1em",
                color: "#2563EB",
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
                color: "#0F172A",
              }}
            >
              Stock Market Headlines
            </Typography>
            <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
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
              color: "#2563EB",
              borderColor: "#CBD5E1",
              "&:hover": { borderColor: "#2563EB", backgroundColor: "rgba(37, 99, 235, 0.04)" },
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
