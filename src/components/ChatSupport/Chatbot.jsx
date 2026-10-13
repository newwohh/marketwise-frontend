import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Fab,
  IconButton,
  Typography,
  TextField,
  Paper,
  Chip,
  Container,
} from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useLocation } from "react-router-dom";
import ChatMessage from "./ChatMessage";
import { analyze } from "./chatutils";
import { chatbotMessageList } from "../../actions/actions";
import NavBar from "../Home/Header/NavBar/NavBar";
import Footer from "../Home/Footer/Footer";

function ChatbotSupport() {
  const location = useLocation();
  const isFullPage = location.pathname === "/chat";

  const [open, setOpen] = useState(isFullPage);
  const [messages, setMessages] = useState([
    {
      message:
        "Hello! I am your MarketWise AI Market Assistant. Ask me about crypto tickers, equities, interactive heatmaps, or our investment simulator.",
      user: false,
    },
  ]);
  const [text, setText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, open]);

  const onSend = () => {
    if (!text.trim()) return;
    const list = chatbotMessageList(messages, text, analyze);
    setMessages(list);
    setText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  // Dedicated Full Page Chat View
  if (isFullPage) {
    return (
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#F8FAFC" }}>
        <NavBar />
        <Container maxWidth="md" sx={{ py: 6, flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Box sx={{ display: "inline-flex", alignItems: "center", gap: 1, mb: 1 }}>
              <SmartToyIcon sx={{ color: "#2563EB", fontSize: 28 }} />
              <Typography variant="h4" sx={{ fontWeight: 800, color: "#0F172A" }}>
                MarketWise AI Assistant
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: "#64748B" }}>
              Instant market intelligence, asset terminology, platform navigation, and strategy explanations.
            </Typography>
          </Box>

          <Paper
            elevation={0}
            sx={{
              flexGrow: 1,
              minHeight: 520,
              display: "flex",
              flexDirection: "column",
              borderRadius: "20px",
              border: "1px solid #E2E8F0",
              overflow: "hidden",
              backgroundColor: "#FFFFFF",
              boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.05)",
            }}
          >
            {/* Header */}
            <Box
              sx={{
                px: 3,
                py: 2,
                backgroundColor: "#0B0F19",
                color: "#FFFFFF",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    bgcolor: "#10B981",
                    boxShadow: "0 0 8px #10B981",
                  }}
                />
                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                  Live Intelligence Session
                </Typography>
              </Box>
              <Chip
                label="Powered by MarketWise LLM"
                size="small"
                sx={{
                  bgcolor: "rgba(255, 255, 255, 0.1)",
                  color: "#94A3B8",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                }}
              />
            </Box>

            {/* Chat Body */}
            <Box sx={{ flexGrow: 1, p: 3, overflowY: "auto", maxHeight: "55vh" }}>
              {messages.map((item, idx) => (
                <ChatMessage key={idx} {...item} />
              ))}
              <div ref={messagesEndRef} />
            </Box>

            {/* Input Bar */}
            <Box
              sx={{
                p: 2,
                backgroundColor: "#F8FAFC",
                borderTop: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
              }}
            >
              <TextField
                fullWidth
                size="small"
                placeholder="Ask anything about crypto, stocks, heatmaps, or simulator..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    backgroundColor: "#FFFFFF",
                  },
                }}
              />
              <IconButton
                color="primary"
                onClick={onSend}
                disabled={!text.trim()}
                sx={{
                  bgcolor: "#2563EB",
                  color: "#FFFFFF",
                  p: 1.25,
                  borderRadius: "12px",
                  "&:hover": { bgcolor: "#1D4ED8" },
                  "&.Mui-disabled": { bgcolor: "#E2E8F0", color: "#94A3B8" },
                }}
              >
                <SendIcon fontSize="small" />
              </IconButton>
            </Box>
          </Paper>
        </Container>
        <Footer />
      </Box>
    );
  }

  // Floating Widget View (for Home and other pages)
  return (
    <Box sx={{ position: "fixed", right: { xs: 20, md: 32 }, bottom: { xs: 20, md: 32 }, zIndex: 1200 }}>
      {open ? (
        <Paper
          elevation={8}
          sx={{
            width: { xs: 320, sm: 380 },
            height: 480,
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            border: "1px solid #CBD5E1",
            overflow: "hidden",
            boxShadow: "0 20px 40px -10px rgba(15, 23, 42, 0.25)",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Header */}
          <Box
            sx={{
              px: 2.5,
              py: 2,
              background: "linear-gradient(135deg, #0F172A 0%, #1E293B 100%)",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  bgcolor: "#10B981",
                  boxShadow: "0 0 6px #10B981",
                }}
              />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                MarketWise AI Assistant
              </Typography>
            </Box>
            <IconButton size="small" onClick={() => setOpen(false)} sx={{ color: "#94A3B8" }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          {/* Messages */}
          <Box sx={{ flexGrow: 1, p: 2, overflowY: "auto" }}>
            {messages.map((item, idx) => (
              <ChatMessage key={idx} {...item} />
            ))}
            <div ref={messagesEndRef} />
          </Box>

          {/* Input */}
          <Box
            sx={{
              p: 1.5,
              backgroundColor: "#F8FAFC",
              borderTop: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              size="small"
              placeholder="Type your question..."
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: "#FFFFFF",
                  fontSize: "0.85rem",
                },
              }}
            />
            <IconButton
              size="small"
              onClick={onSend}
              disabled={!text.trim()}
              sx={{
                bgcolor: "#2563EB",
                color: "#FFFFFF",
                p: 1,
                borderRadius: "10px",
                "&:hover": { bgcolor: "#1D4ED8" },
                "&.Mui-disabled": { bgcolor: "#E2E8F0", color: "#94A3B8" },
              }}
            >
              <SendIcon fontSize="small" />
            </IconButton>
          </Box>
        </Paper>
      ) : (
        <Fab
          color="primary"
          onClick={() => setOpen(true)}
          sx={{
            width: 56,
            height: 56,
            boxShadow: "0 8px 24px rgba(37, 99, 235, 0.4)",
            background: "linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)",
            "&:hover": { background: "linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)" },
          }}
        >
          <ChatIcon />
        </Fab>
      )}
    </Box>
  );
}

export default ChatbotSupport;
