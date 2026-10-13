import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

function OverviewNewsCard({ el }) {
  if (!el) return null;

  const title = el.title || el.name || "Market Headline";
  const image =
    el.image_url ||
    el.urlToImage ||
    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80";
  const desc = el.description || "Review this latest market story and in-depth financial analysis.";
  const link = el.article_url || el.url || el.link;

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 10px 24px -5px rgba(0, 0, 0, 0.08)",
          borderColor: "#93C5FD",
        },
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
        sx={{ objectFit: "cover", backgroundColor: "#F1F5F9" }}
      />
      <CardContent
        sx={{
          p: 2.5,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              lineHeight: 1.4,
              mb: 1,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#64748B",
              fontSize: "0.85rem",
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {desc}
          </Typography>
        </Box>

        {link && (
          <Box sx={{ mt: 2, pt: 1.5, borderTop: "1px solid #F1F5F9" }}>
            <Button
              component="a"
              href={link}
              target="_blank"
              rel="noreferrer"
              size="small"
              endIcon={<LaunchIcon sx={{ fontSize: 14 }} />}
              sx={{ p: 0, fontWeight: 700, color: "#2563EB", fontSize: "0.8rem" }}
            >
              Read Full Story
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default OverviewNewsCard;
