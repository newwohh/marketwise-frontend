import React from "react";
import user from "../../../../assets/MyApril6.jpg";
import { Button, Divider, Typography } from "@mui/material";

function ProfileUI() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <img
          src={user}
          alt=""
          style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        />
      </div>
      <Typography align="center">First Last</Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Button>Edit Profile</Button>
        <Button>Preview</Button>
      </div>
      <Divider />
    </div>
  );
}

export default ProfileUI;
