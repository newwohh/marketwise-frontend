import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FaqAccordion({ el }) {
  if (!el) return null;

  return (
    <Accordion
      elevation={0}
      sx={{
        mb: 2,
        borderRadius: "16px !important",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        "&:before": { display: "none" },
        transition: "all 0.2s ease",
        "&.Mui-expanded": {
          boxShadow: "0 8px 20px -4px rgba(0, 0, 0, 0.05)",
          borderColor: "#93C5FD",
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#2563EB" }} />}
        sx={{
          py: 1.5,
          px: 3,
        }}
      >
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#0F172A", lineHeight: 1.4 }}>
            {el.primary}
          </Typography>
          {el.secondary && (
            <Typography variant="caption" sx={{ color: "#64748B", display: "block", mt: 0.25 }}>
              {el.secondary}
            </Typography>
          )}
        </Box>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 3, pb: 3, pt: 0, textAlign: "left" }}>
        <Typography variant="body2" sx={{ color: "#475569", lineHeight: 1.7, fontSize: "0.925rem" }}>
          {el.description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default FaqAccordion;
