import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";

function StockNewsCard({ el }) {
  const [open, setOpen] = useState(false);

  if (!el) return null;

  const title = el.title || "Market Headline";
  const author = el.author || el.source?.name || "Financial Desk";
  const description = el.description || "Click to review the complete story and details.";
  const image = el.urlToImage || "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=80";

  return (
    <>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(15, 23, 42, 0.75)",
          backdropFilter: "blur(12px)",
          overflow: "hidden",
          transition: "all 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 14px 28px -6px rgba(0, 0, 0, 0.45)",
            borderColor: "rgba(96, 165, 250, 0.5)",
            backgroundColor: "rgba(22, 33, 56, 0.88)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={title}
          sx={{ objectFit: "cover", backgroundColor: "#1E293B" }}
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
            <Typography variant="caption" sx={{ color: "#60A5FA", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", mb: 0.5, display: "block" }}>
              {author}
            </Typography>
            <Typography
              variant="subtitle1"
              onClick={() => setOpen(true)}
              sx={{
                fontWeight: 700,
                color: "#F8FAFC",
                lineHeight: 1.35,
                mb: 1,
                cursor: "pointer",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                "&:hover": { color: "#60A5FA" },
              }}
            >
              {title}
            </Typography>
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
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2, pt: 1.5, borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
            <Button
              size="small"
              onClick={() => setOpen(true)}
              sx={{ p: 0, fontWeight: 700, color: "#60A5FA", fontSize: "0.8rem", "&:hover": { color: "#93C5FD" } }}
            >
              Read Summary
            </Button>
            {el.url && (
              <IconButton
                component="a"
                href={el.url}
                target="_blank"
                rel="noreferrer"
                size="small"
                sx={{ color: "#94A3B8", "&:hover": { color: "#60A5FA" } }}
              >
                <LaunchIcon sx={{ fontSize: 16 }} />
              </IconButton>
            )}
          </Box>
        </CardContent>
      </Card>

      {/* Reader Modal */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "18px",
            backgroundColor: "#0F172A",
            color: "#F8FAFC",
            border: "1px solid rgba(255, 255, 255, 0.12)",
          },
        }}
      >
        <DialogTitle sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", pb: 1 }}>
          <Box sx={{ pr: 2 }}>
            <Typography variant="caption" sx={{ color: "#60A5FA", fontWeight: 700 }}>
              {author}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 800, color: "#F8FAFC", lineHeight: 1.3 }}>
              {title}
            </Typography>
          </Box>
          <IconButton onClick={() => setOpen(false)} size="small" sx={{ color: "#94A3B8" }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ borderColor: "rgba(255, 255, 255, 0.08)" }}>
          {image && (
            <Box
              component="img"
              src={image}
              alt={title}
              sx={{ width: "100%", maxHeight: 240, objectFit: "cover", borderRadius: "12px", mb: 2 }}
            />
          )}
          <Typography variant="body1" sx={{ color: "#CBD5E1", lineHeight: 1.7 }}>
            {el.content || description}
          </Typography>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          {el.url && (
            <Button
              component="a"
              href={el.url}
              target="_blank"
              rel="noreferrer"
              variant="contained"
              endIcon={<LaunchIcon />}
              sx={{ borderRadius: "8px", backgroundColor: "#2563EB" }}
            >
              Original Source
            </Button>
          )}
          <Button onClick={() => setOpen(false)} sx={{ color: "#94A3B8" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default StockNewsCard;
