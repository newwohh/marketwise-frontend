import React, { useEffect, useCallback } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../../reducers/reducers";
import BlogCard from "./BlogCard";
import { checkBlogs } from "../../actions/actions";

function BlogsContent() {
  const dispatch = useDispatch();
  const { allblogs } = useSelector((state) => state.marketwise);
  const blogs = checkBlogs(allblogs);

  const fetchBlogs = useCallback(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  // Fallback high-quality editorial articles
  const defaultArticles = [
    {
      title: "Understanding Order Flow & Liquidity Pools",
      description: "How institutional market makers manage bid-ask spreads and why liquidity clustering matters for retail execution.",
    },
    {
      title: "Macro Yield Curves and Crypto Decoupling",
      description: "Analyzing the statistical correlation between US 10-year Treasury yields and digital asset volatility.",
    },
    {
      title: "The Mechanics of Forex Carry Trades",
      description: "A comprehensive guide on leveraging central bank interest rate differentials in the currency markets.",
    },
    {
      title: "Hedging Portfolios Using Quantitative Stops",
      description: "Practical volatility-adjusted position sizing and trailing stops to protect trading capital.",
    },
  ];

  const displayList = Array.isArray(blogs) && blogs.length > 0 && blogs[0].title !== "loading"
    ? blogs
    : defaultArticles;

  return (
    <Box component="main" sx={{ py: { xs: 6, md: 10 }, backgroundColor: "#F8FAFC" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", maxWidth: 680, mx: "auto", mb: { xs: 5, md: 8 } }}>
          <Typography
            variant="caption"
            sx={{
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#2563EB",
              fontWeight: 800,
              display: "block",
              mb: 1,
            }}
          >
            Editorial & Research Desk
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.75rem" },
              color: "#0F172A",
              letterSpacing: "-0.03em",
              mb: 1.5,
            }}
          >
            MarketWise Intelligence & Insights
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B" }}>
            In-depth perspectives, strategy guides, and macro commentary across crypto, equities, and forex.
          </Typography>
        </Box>

        {/* Articles Grid */}
        <Grid container spacing={3.5}>
          {displayList.map((item, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <BlogCard title={item.title} description={item.description} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default BlogsContent;
