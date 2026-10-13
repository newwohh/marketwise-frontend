import React from "react";
import { Box, Typography, Avatar } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PersonIcon from "@mui/icons-material/Person";

function ChatMessage({ user, message }) {
  const isUser = Boolean(user);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        alignItems: "flex-end",
        gap: 1,
        mb: 2,
      }}
    >
      {!isUser && (
        <Avatar
          sx={{
            width: 28,
            height: 28,
            bgcolor: "#2563EB",
            color: "#FFFFFF",
            boxShadow: "0 2px 6px rgba(37, 99, 235, 0.25)",
          }}
        >
          <SupportAgentIcon sx={{ fontSize: 16 }} />
        </Avatar>
      )}

      <Box
        sx={{
          maxWidth: "78%",
          p: 1.75,
          borderRadius: isUser ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
          backgroundColor: isUser ? "#2563EB" : "#F1F5F9",
          color: isUser ? "#FFFFFF" : "#0F172A",
          boxShadow: isUser ? "0 2px 8px rgba(37, 99, 235, 0.2)" : "0 1px 2px rgba(0, 0, 0, 0.04)",
          border: isUser ? "none" : "1px solid #E2E8F0",
        }}
      >
        <Typography variant="body2" sx={{ lineHeight: 1.55, fontSize: "0.875rem" }}>
          {message}
        </Typography>
      </Box>

      {isUser && (
        <Avatar
          sx={{
            width: 28,
            height: 28,
            bgcolor: "#0F172A",
            color: "#FFFFFF",
          }}
        >
          <PersonIcon sx={{ fontSize: 16 }} />
        </Avatar>
      )}
    </Box>
  );
}

export default ChatMessage;
