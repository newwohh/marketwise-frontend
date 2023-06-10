import React from "react";
import user from "../../../../assets/MyApril6.jpg";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
} from "@mui/material";

function ProfileUI() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "30px",
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
          marginTop: "20px",
          marginBottom: "30px",
        }}
      >
        <Button
          sx={{
            width: "200px",
            height: "50px",
            borderRadius: "30px",
            color: "#002244",
          }}
        >
          Edit Profile
        </Button>
        <Button
          sx={{
            width: "200px",
            height: "50px",
            borderRadius: "30px",
            color: "#002244",
          }}
        >
          Preview
        </Button>
      </div>
      <Divider />
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List sx={{ width: "800px" }}>
          <ListItem>
            <ListItemText>Name</ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                defaultValue={"Name"}
                InputProps={{
                  readOnly: true,
                }}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>E-Mail</ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                defaultValue="E-Mail"
                InputProps={{
                  readOnly: true,
                }}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ width: "100px" }}>Password</ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                defaultValue="Password"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "300px" }}
              />
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default ProfileUI;
