import React, { useContext } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Grid,
  TextField,
  Chip,
  Divider,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { MyContext } from "../../../context/Context";

function ProfileUI() {
  const { user } = useContext(MyContext);
  const userName = user?.user?.name || user?.name || "Trader";
  const userEmail = user?.user?.email || user?.email || "trader@marketwise.com";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <Card
      sx={{
        borderRadius: "20px",
        border: "1px solid #E2E8F0",
        backgroundColor: "#FFFFFF",
        p: { xs: 3, md: 4 },
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04)",
      }}
    >
      <CardContent sx={{ p: "0 !important" }}>
        {/* User Hero Banner inside Card */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4, flexWrap: "wrap" }}>
          <Avatar
            sx={{
              width: 80,
              height: 80,
              bgcolor: "#2563EB",
              fontSize: "2rem",
              fontWeight: 800,
              boxShadow: "0 4px 14px rgba(37, 99, 235, 0.3)",
            }}
          >
            {userInitial}
          </Avatar>
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#0F172A" }}>
                {userName}
              </Typography>
              <Chip
                icon={<VerifiedUserIcon sx={{ fontSize: "14px !important", color: "#10B981" }} />}
                label="Verified Member"
                size="small"
                sx={{
                  bgcolor: "rgba(16, 185, 129, 0.1)",
                  color: "#059669",
                  fontWeight: 700,
                  fontSize: "0.75rem",
                  borderRadius: "6px",
                }}
              />
            </Box>
            <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
              {userEmail}
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ mb: 4 }} />

        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: "#0F172A", mb: 2 }}>
          Account Credentials
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Display Name"
              value={userName}
              fullWidth
              InputProps={{
                readOnly: true,
                startAdornment: <PersonIcon sx={{ color: "#94A3B8", mr: 1 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Registered Email"
              value={userEmail}
              fullWidth
              InputProps={{
                readOnly: true,
                startAdornment: <EmailIcon sx={{ color: "#94A3B8", mr: 1 }} />,
              }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ProfileUI;
