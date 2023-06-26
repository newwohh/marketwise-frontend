import React from "react";
import Chatbot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, ClickAwayListener, Fab } from "@mui/material";

const steps = [
  {
    id: "Greet",
    message: "Hello! welcome to MarketWise ",
    trigger: "Ask Name",
  },
  { id: "Ask Name", message: "Please enter your name", trigger: "waiting1" },
  { id: "waiting1", user: true, trigger: "Name" },
  {
    id: "Name",
    message:
      "Hi {previousValue}, Please select which feature you want to know about",
    trigger: "Features",
  },
  {
    id: "Features",
    options: [
      { value: "Heatmap", label: "Heatmap", trigger: "Heatmap" },
      {
        value: "Invest Simulator",
        label: "Invest Simulator",
        trigger: "Invest Simulator",
      },
      { value: "Charts", label: "Charts", trigger: "Charts" },
    ],
  },
  {
    id: "Heatmap",
    message:
      "Thanks for showing interest in one of our feature  The Heatmap is a way to determine where liquidity is in the market and how liquidity-providers are behaving. In other words, it helps traders to determine where the actual orders in the market are being made",
    end: true,
  },
  {
    id: "Invest Simulator",
    message:
      "An investment simulator is a software program that allows users to     practice investing without risking any real money. It does this by     giving users a virtual balance of money to invest, which they can   then use to buy and sell stocks, bonds, and other financial    instruments.",
    end: true,
  },
  {
    id: "Charts",
    message: "User can view the selected ticker in chart format",
    end: true,
  },
];

const theme = {
  background: "#F0F8FF",
  fontFamily: "Helvetica Neue",
  headerBgColor: "#002244",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#002244",
  botFontColor: "white",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

function ChatbotSupport() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "50px",
        bottom: "50px",
      }}
    >
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          {open ? (
            <ThemeProvider theme={theme}>
              <Chatbot steps={steps} />
            </ThemeProvider>
          ) : (
            <Fab onClick={handleClick}>
              <ChatIcon />
            </Fab>
          )}
        </Box>
      </ClickAwayListener>
    </div>
  );
}

export default ChatbotSupport;
