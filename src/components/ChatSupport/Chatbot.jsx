import React from "react";
import { ThemeProvider } from "styled-components";
import ChatIcon from "@mui/icons-material/Chat";
import { Box, Button, ClickAwayListener, Fab, TextField } from "@mui/material";
import ChatMessage from "./ChatMessage";
import { analyze } from "./chatutils";

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
  const [messages, setMessages] = React.useState([{ message: " hi" }]);
  const [text, setText] = React.useState("");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const onSend = () => {
    let list = [...messages, { message: text, user: true }];
    console.log(list);
    if (list.length > 2) {
      const reply = analyze(text);
      list = [...messages, { message: reply }];
    } else {
      list = [
        ...list,
        {
          message: " Hi! What can i help you ?",
        },
        {
          message: "What do you want to know about?",
        },
      ];
    }
    setMessages(list);
    setText("");
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
              <Box
                sx={{
                  border: "3px solid #002244",
                  borderRadius: "20px",
                  borderTop: "30px solid #002244",
                  height: "450px",
                  width: "450px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                  padding: "10px",
                  overflow: "scroll",
                  backgroundColor: "white",
                }}
              >
                {messages.map((data) => (
                  <ChatMessage {...data} />
                ))}
                <Box
                  sx={{
                    display: "flex",
                    alignContent: "center",
                    border: "3px solid #002244",
                    borderRadius: "20px",
                    justifyContent: "space-between",
                  }}
                >
                  <TextField
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    sx={{ borderColor: "#002244", width: "350px" }}
                  ></TextField>
                  <Button
                    sx={{
                      backgroundColor: "#002244",
                      width: "98px",
                      color: "white",
                      borderRadius: "16px",
                    }}
                    onClick={onSend}
                  >
                    send
                  </Button>
                </Box>
              </Box>
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
