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
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(30, 34, 45, 0.75)",
          backdropFilter: "blur(12px)",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 14px 28px -6px rgba(0, 0, 0, 0.45)",
            borderColor: "rgba(245, 158, 11, 0.4)",
            backgroundColor: "rgba(30, 34, 45, 0.95)",
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
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                color: "#FBBF24",
                border: "1px solid rgba(245, 158, 11, 0.3)",
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
              color: "#F8FAFC",
              fontSize: "0.98rem",
              lineHeight: 1.4,
              mb: 1,
              cursor: "pointer",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              "&:hover": { color: "#FBBF24" },
            }}
          >
            {title}
          </Typography>

          {/* Description */}
          <Typography
            variant="body2"
            sx={{
              color: "#94A3B8",
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

        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, pt: 1.5, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <Button
            size="small"
            onClick={() => setModalOpen(true)}
            sx={{
              p: 0,
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#FBBF24",
              "&:hover": { backgroundColor: "transparent", color: "#FDE68A" },
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
              sx={{ color: "#94A3B8", "&:hover": { color: "#FBBF24" } }}
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
            backgroundColor: "#1E222D",
            color: "#F8FAFC",
            border: "1px solid rgba(255, 255, 255, 0.12)",
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
                backgroundColor: "rgba(245, 158, 11, 0.15)",
                color: "#FBBF24",
                border: "1px solid rgba(245, 158, 11, 0.3)",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#F8FAFC", lineHeight: 1.3 }}>
              {title}
            </Typography>
          </Box>
          <IconButton onClick={() => setModalOpen(false)} size="small" sx={{ color: "#94A3B8" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          <Typography variant="body1" sx={{ color: "#CBD5E1", lineHeight: 1.8, fontSize: "0.95rem" }}>
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
              sx={{
                borderRadius: "8px",
                background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
                fontWeight: 700,
                "&:hover": { background: "linear-gradient(135deg, #34D399 0%, #10B981 100%)" },
              }}
            >
              Read Full Source
            </Button>
          )}
          <Button onClick={() => setModalOpen(false)} sx={{ color: "#94A3B8" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default CryptoNewsCard;
