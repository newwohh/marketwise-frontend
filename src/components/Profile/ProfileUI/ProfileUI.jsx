import React, { useContext } from "react";
import userImg from "../../../assets/MyApril6.jpg";
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { MyContext } from "../../../context/Context";
import { useTheme } from "@mui/material/styles";
import {} from "@mui/material";
import { setCurrentUser } from "../../../actions/actions";
function ProfileUI() {
  let currUserName, currUserEmail;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const { user } = useContext(MyContext);
  let userCredentials = setCurrentUser(user);
  currUserName = userCredentials.currUserName;
  currUserEmail = userCredentials.currUserEmail;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          marginBottom: "30px",
          marginLeft: "0",
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
          marginTop: isMatch ? "20px" : "0px",
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
        <List sx={{ width: isMatch ? "800px" : "300px" }}>
          <ListItem>
            <ListItemText sx={{ width: "100px" }}>Name:</ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                value={currUserName}
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: isMatch ? "300px" : "200px" }}
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
                sx={{ width: isMatch ? "300px" : "200px" }}
              />
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText sx={{ width: "100px", color: "black" }}>
              Password:
            </ListItemText>
            <ListItemText>
              <TextField
                id="outlined-read-only-input"
                defaultValue="Password"
                InputProps={{
                  readOnly: true,
                }}
                sx={{ width: isMatch ? "300px" : "200px" }}
              />
            </ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default ProfileUI;
