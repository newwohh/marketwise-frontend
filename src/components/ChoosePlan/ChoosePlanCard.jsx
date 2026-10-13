import React, { useContext } from "react";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { MyContext } from "../../context/Context";
import { createPayment } from "../../api";

function ChoosePlanCard({ el }) {
  const { user } = useContext(MyContext);
  if (!el) return null;

  const price = el.subtitle || "0";
  const parsedInt = parseFloat(price) * 100;
  const isPopular = el.title.toLowerCase().includes("pro");

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "22px",
        p: { xs: 3, md: 4 },
        position: "relative",
        border: isPopular ? "2px solid #2563EB" : "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        boxShadow: isPopular
          ? "0 12px 30px -5px rgba(37, 99, 235, 0.18)"
          : "0 2px 8px rgba(0, 0, 0, 0.04)",
        transition: "all 0.25s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 16px 36px -8px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {isPopular && (
        <Chip
          label="MOST POPULAR"
          size="small"
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            fontWeight: 800,
            fontSize: "0.68rem",
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            borderRadius: "6px",
          }}
        />
      )}

      <CardContent sx={{ p: "0 !important" }}>
        <Typography variant="overline" sx={{ fontWeight: 800, color: "#2563EB", letterSpacing: "0.08em" }}>
          {el.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "baseline", my: 1.5 }}>
          <Typography variant="h3" sx={{ fontWeight: 800, color: "#0F172A", letterSpacing: "-0.03em" }}>
            ${price}
          </Typography>
          <Typography variant="body2" sx={{ color: "#64748B", ml: 1, fontWeight: 600 }}>
            / month
          </Typography>
        </Box>

        <Typography variant="caption" sx={{ color: "#94A3B8", display: "block", mb: 3 }}>
          {el.bill || "Billed monthly. Cancel anytime."}
        </Typography>

        <List sx={{ p: 0, display: "flex", flexDirection: "column", gap: 1 }}>
          {el.features?.map((feat, idx) => (
            <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
              <ListItemIcon sx={{ minWidth: 28 }}>
                <CheckCircleIcon sx={{ fontSize: 18, color: "#10B981" }} />
              </ListItemIcon>
              <ListItemText
                primary={feat}
                primaryTypographyProps={{
                  fontSize: "0.875rem",
                  color: "#334155",
                  fontWeight: 500,
                }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>

      <Box sx={{ mt: 4 }}>
        <Button
          fullWidth
          variant={isPopular ? "contained" : "outlined"}
          size="large"
          onClick={() => createPayment(parsedInt, el.title, user)}
          sx={{
            py: 1.3,
            borderRadius: "12px",
            fontWeight: 700,
            fontSize: "0.95rem",
            background: isPopular ? "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)" : "transparent",
            color: isPopular ? "#FFFFFF" : "#2563EB",
            borderColor: isPopular ? "transparent" : "#CBD5E1",
            "&:hover": {
              borderColor: "#2563EB",
              backgroundColor: isPopular ? undefined : "rgba(37, 99, 235, 0.04)",
            },
          }}
        >
          {isPopular ? "Upgrade to Pro" : "Get Started"}
        </Button>
      </Box>
    </Card>
  );
}

export default ChoosePlanCard;
