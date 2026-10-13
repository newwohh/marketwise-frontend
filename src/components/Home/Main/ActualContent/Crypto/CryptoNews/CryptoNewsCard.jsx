import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

function CryptoNewsCard({ news }) {
  const [modalOpen, setModalOpen] = useState(false);

  if (!news) return null;

  const title = news.title || "Market Update";
  const source = news.source_id || news.creator?.[0] || news.author || "Crypto Desk";
  const pubDate = news.pubDate ? new Date(news.pubDate).toLocaleDateString() : "Recent";
  const description = news.description || news.content || "Click to read full coverage of this market event.";

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2.5,
          borderRadius: "16px",
          border: "1px solid #E2E8F0",
          backgroundColor: "#FFFFFF",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.08)",
            borderColor: "#93C5FD",
          },
        }}
      >
        <CardContent sx={{ p: "0 !important" }}>
          {/* Metadata Bar */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1.5 }}>
            <Chip
              label={source}
              size="small"
              sx={{
                height: 22,
                fontSize: "0.7rem",
                fontWeight: 700,
                backgroundColor: "rgba(37, 99, 235, 0.08)",
                color: "#2563EB",
                borderRadius: "6px",
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#94A3B8" }}>
              <AccessTimeIcon sx={{ fontSize: 13 }} />
              <Typography variant="caption" sx={{ fontSize: "0.75rem" }}>
                {pubDate}
              </Typography>
            </Box>
          </Box>

          {/* Title */}
          <Typography
            variant="subtitle1"
            onClick={() => setModalOpen(true)}
            sx={{
              fontWeight: 700,
              color: "#0F172A",
              fontSize: "0.98rem",
              lineHeight: 1.4,
              mb: 1,
              cursor: "pointer",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              "&:hover": { color: "#2563EB" },
            }}
          >
            {title}
          </Typography>

          {/* Description */}
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
            {description}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, pt: 1.5, borderTop: "1px solid #F1F5F9" }}>
          <Button
            size="small"
            onClick={() => setModalOpen(true)}
            sx={{
              p: 0,
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#2563EB",
              "&:hover": { backgroundColor: "transparent", color: "#1D4ED8" },
            }}
          >
            Quick View
          </Button>

          {news.link && (
            <IconButton
              component="a"
              href={news.link}
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{ color: "#94A3B8", "&:hover": { color: "#2563EB" } }}
            >
              <LaunchIcon sx={{ fontSize: 16 }} />
            </IconButton>
          )}
        </Box>
      </Card>

      {/* Reader Modal */}
      <Dialog
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "18px",
            p: 1,
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", pb: 1 }}>
          <Box sx={{ pr: 2 }}>
            <Chip
              label={source}
              size="small"
              sx={{
                mb: 1,
                fontWeight: 700,
                backgroundColor: "rgba(37, 99, 235, 0.1)",
                color: "#2563EB",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#0F172A", lineHeight: 1.3 }}>
              {title}
            </Typography>
          </Box>
          <IconButton onClick={() => setModalOpen(false)} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ borderColor: "#F1F5F9" }}>
          <Typography variant="body1" sx={{ color: "#334155", lineHeight: 1.8, fontSize: "0.95rem" }}>
            {news.content || description}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          {news.link && (
            <Button
              component="a"
              href={news.link}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{ borderRadius: "8px" }}
            >
              Read Full Source
            </Button>
          )}
          <Button onClick={() => setModalOpen(false)} sx={{ color: "#64748B" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CryptoNewsCard;
