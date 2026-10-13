import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import SchoolIcon from "@mui/icons-material/School";
import Speech from "react-text-to-speech";
import { textHandler } from "../../../actions/actions";

function ContentSection({ el, sectionId }) {
  if (!el) return null;
  const audioText = textHandler(el);

  return (
    <Card
      id={sectionId}
      sx={{
        borderRadius: "24px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        p: { xs: 3, md: 5 },
        mb: 4,
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
      }}
    >
      <CardContent sx={{ p: "0 !important" }}>
        {/* Module Header */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
          <Chip
            icon={<SchoolIcon sx={{ fontSize: "16px !important", color: "#2563EB" }} />}
            label="Academy Module"
            size="small"
            sx={{
              fontWeight: 700,
              fontSize: "0.75rem",
              bgcolor: "rgba(37, 99, 235, 0.08)",
              color: "#2563EB",
              borderRadius: "6px",
            }}
          />
        </Box>

        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            color: "#0F172A",
            fontSize: { xs: "1.5rem", md: "1.85rem" },
            letterSpacing: "-0.02em",
            mb: 2,
          }}
        >
          {el.title}
        </Typography>

        <Typography variant="body1" sx={{ color: "#475569", lineHeight: 1.7, mb: 3, fontSize: "1rem" }}>
          {el.description}
        </Typography>

        {/* Curriculum Concept List */}
        {el.list && el.list.length > 0 && (
          <List sx={{ p: 0, display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
            {el.list.map((item, idx) => (
              <ListItem
                key={idx}
                disableGutters
                sx={{
                  p: 2.5,
                  borderRadius: "14px",
                  bgcolor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                  <CheckCircleIcon sx={{ fontSize: 20, color: "#2563EB" }} />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#0F172A", mb: 0.5 }}>
                      {item.list_title}
                    </Typography>
                  }
                  secondary={
                    <Box>
                      <Typography variant="body2" sx={{ color: "#64748B", lineHeight: 1.6 }}>
                        {item.list_description}
                      </Typography>
                      {item.list_bullets && (
                        <Box component="ul" sx={{ mt: 1, pl: 2, color: "#475569", fontSize: "0.875rem" }}>
                          {item.list_bullets.map((b, bi) => (
                            <li key={bi} style={{ marginBottom: 4 }}>
                              {b}
                            </li>
                          ))}
                        </Box>
                      )}
                    </Box>
                  }
                />
              </ListItem>
            ))}
          </List>
        )}

        {/* Text-to-Speech Audio Player */}
        <Box sx={{ mb: 4, display: "flex", alignItems: "center", gap: 2 }}>
          <Speech
            text={audioText}
            startBtn={
              <Button
                variant="outlined"
                size="small"
                startIcon={<PlayArrowIcon />}
                sx={{
                  borderRadius: "10px",
                  fontWeight: 700,
                  color: "#2563EB",
                  borderColor: "#CBD5E1",
                  "&:hover": { borderColor: "#2563EB", bgcolor: "rgba(37, 99, 235, 0.04)" },
                }}
              >
                Listen to Lesson
              </Button>
            }
            stopBtn={
              <Button
                variant="outlined"
                color="error"
                size="small"
                startIcon={<StopIcon />}
                sx={{ borderRadius: "10px", fontWeight: 700 }}
              >
                Stop Audio
              </Button>
            }
          />
        </Box>

        {/* Key Takeaways Card */}
        {el.card && el.card.length > 0 && (
          <Box
            sx={{
              p: 3.5,
              borderRadius: "18px",
              background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              color: "#FFFFFF",
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: "#60A5FA", letterSpacing: "0.08em", mb: 1.5, textTransform: "uppercase" }}>
              Key Takeaways
            </Typography>
            <Divider sx={{ mb: 2, borderColor: "rgba(255, 255, 255, 0.1)" }} />
            <Box component="ul" sx={{ pl: 2.5, m: 0, color: "#E2E8F0", fontSize: "0.925rem", lineHeight: 1.8 }}>
              {el.card.map((point, pi) => (
                <li key={pi} style={{ marginBottom: 4 }}>
                  {point}
                </li>
              ))}
            </Box>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}

export default ContentSection;
