import React from "react";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
function ChatMessage(props) {
  let flex = props.user ? "end" : "";
  return (
    <div style={{ display: "flex", justifyContent: flex }}>
      {props.user ? (
        <span
          style={{
            margin: "1rem",
            backgroundColor: "#002244",
            // height: "30px",
            borderRadius: "20px",
            padding: "10px",
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
          key={1}
        >
          <PermIdentityIcon />
          {props.message}
        </span>
      ) : (
        <span
          style={{
            margin: "1rem",
            backgroundColor: "#002244",
            // height: "30px",
            borderRadius: "20px",
            padding: "10px",
            color: "white",
            overflow: "auto",
            display: "flex",
            alignItems: "center",
          }}
          key={2}
        >
          <SupportAgentIcon /> {props.message}
        </span>
      )}
    </div>
  );
}

export default ChatMessage;
