import React from "react";
import { Chatbot } from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, ClickAwayListener, Fab } from "@mui/material";

function ChatbotSupport() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: "fixed", right: "50px", bottom: "50px" }}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <Box>
          {open ? (
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
            />
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
