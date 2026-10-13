import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Grid,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import EditNoteIcon from "@mui/icons-material/EditNote";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import Footer from "../components/Home/Footer/Footer";
import ProfileUI from "../components/Profile/ProfileUI/ProfileUI";
import Subscriptions from "../components/Profile/Subscriptions/Subscriptions";
import WriteBlogs from "../components/Profile/WriteBlogs/WriteBlogs";
import { titleHandler } from "../handler/titleHandler";
import { useScrollToTop } from "../actions/actions";

export default function Profile() {
  titleHandler("Profile");
  useScrollToTop();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
      <NavBar />

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 }, flexGrow: 1 }}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.5rem" },
              color: "#0F172A",
              letterSpacing: "-0.02em",
            }}
          >
            Account Settings
          </Typography>
          <Typography variant="body1" sx={{ color: "#64748B", mt: 0.5 }}>
            Manage your personal profile, active subscription tiers, and published market articles.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={3.5}>
            <Tabs
              orientation="vertical"
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              sx={{
                bgcolor: "#FFFFFF",
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                p: 1,
                "& .MuiTab-root": {
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderRadius: "10px",
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "0.95rem",
                  py: 1.5,
                  px: 2,
                  minHeight: 48,
                  gap: 1.5,
                },
                "& .Mui-selected": {
                  bgcolor: "rgba(37, 99, 235, 0.08)",
                  color: "#2563EB",
                },
              }}
            >
              <Tab icon={<PersonIcon sx={{ fontSize: 20 }} />} iconPosition="start" label="Account Details" />
              <Tab icon={<CardMembershipIcon sx={{ fontSize: 20 }} />} iconPosition="start" label="Subscriptions" />
              <Tab icon={<EditNoteIcon sx={{ fontSize: 20 }} />} iconPosition="start" label="Publish Articles" />
            </Tabs>
          </Grid>

          <Grid item xs={12} md={8.5}>
            {activeTab === 0 && <ProfileUI />}
            {activeTab === 1 && <Subscriptions />}
            {activeTab === 2 && <WriteBlogs />}
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
