import React, { useContext } from "react";
import userImg from "../../../../assets/MyApril6.jpg";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
} from "@mui/material";
import { MyContext } from "../../../../context/Context";

function ProfileUI() {
  const { user } = useContext(MyContext);
  let currUserName, currUserEmail;
  user.user ? (currUserName = user.user.name) : (currUserName = "please wait");
  user.user
    ? (currUserEmail = user.user.email)
    : (currUserEmail = "please wait");

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
          src={userImg}
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
            <ListItemText sx={{ width: "100px" }}>Name:</ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                value={currUserName}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "300px" }}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ width: "100px" }}>E-Mail:</ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                value={currUserEmail}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: "300px" }}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ width: "100px" }}>Password:</ListItemText>
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
