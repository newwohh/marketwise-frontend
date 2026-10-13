import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../../assets/profit(1).png";
import { postNewUser } from "../../api";

function SignUpContent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreed) return;
    setLoading(true);
    try {
      await postNewUser(formData);
      navigate("/login");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="main"
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: "#F8FAFC",
        minHeight: "calc(100vh - 140px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: { xs: 3, sm: 5 },
            borderRadius: "24px",
            border: "1px solid #E2E8F0",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.06)",
          }}
        >
          <CardContent sx={{ p: "0 !important" }}>
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Box
                component="img"
                src={logo}
                alt="MarketWise"
                sx={{ width: 48, height: 48, borderRadius: "12px", mb: 1.5 }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
                Create Your Account
              </Typography>
              <Typography variant="body2" sx={{ color: "#64748B", mt: 0.5 }}>
                Join thousands of active traders tracking global markets today.
              </Typography>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    required
                    fullWidth
                    value={formData.first}
                    onChange={(e) => handleChange("first", e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    required
                    fullWidth
                    value={formData.last}
                    onChange={(e) => handleChange("last", e.target.value)}
                  />
                </Grid>
              </Grid>

              <TextField
                label="Email Address"
                type="email"
                required
                fullWidth
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
              />

              <TextField
                label="Password"
                type="password"
                required
                fullWidth
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
              />

              <TextField
                label="Confirm Password"
                type="password"
                required
                fullWidth
                value={formData.passwordConfirm}
                onChange={(e) => handleChange("passwordConfirm", e.target.value)}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    color="primary"
                    required
                  />
                }
                label={
                  <Typography variant="body2" sx={{ color: "#64748B" }}>
                    I agree to the Terms of Service & Privacy Policy
                  </Typography>
                }
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                disabled={loading || !agreed}
                sx={{
                  py: 1.4,
                  fontSize: "1rem",
                  fontWeight: 700,
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
                  boxShadow: "0 4px 12px rgba(37, 99, 235, 0.25)",
                  mt: 1,
                }}
              >
                {loading ? "Creating Account..." : "Create Free Account"}
              </Button>

              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Typography variant="body2" sx={{ color: "#64748B" }}>
                  Already have an account?{" "}
                  <Typography
                    component={RouterLink}
                    to="/login"
                    sx={{ color: "#2563EB", fontWeight: 700, textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                  >
                    Sign in here
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default SignUpContent;
