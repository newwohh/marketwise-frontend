import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StarsIcon from "@mui/icons-material/Stars";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StopIcon from "@mui/icons-material/Stop";
import useLearnContentStyles from "../../../styles/Learn/LearnContentStyles";
import Speech from "react-text-to-speech";

function ContentSection(props) {
  const LearnContentClasses = useLearnContentStyles;
  const [play, setPLay] = useState(false);

  const textHandler = (text) => {
    const title = text.title;
    const description = text.description;
    const data = text.list.map((el) => el.list_title + el.list_description);

    return title + description + data;
  };
  let text = textHandler(props.el);
  return (
    <div ref={props.ref} key={props.i}>
      <Box ref={props.ref} sx={LearnContentClasses.learnread}>
        <div id="whatistrading">
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bolder",
              fontSize: "30px",
              marginBottom: "20px",
            }}
          >
            {props.el.title}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "Helvetica",
              lineHeight: "45px",
              fontSize: "20px",
            }}
            align="left"
          >
            {props.el.description}
            <List sx={{ display: "flex", flexDirection: "column" }}>
              {props.el.list.map((el, i) => {
                return (
                  <ListItem key={i}>
                    <ListItemIcon>
                      <StarsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: "underline", fontWeight: "bold" }}
                      >
                        {el.list_title}
                      </Typography>
                      {el.list_description}
                      {el.list_bullets
                        ? el.list_bullets.map((el, i) => {
                            return (
                              <ul key={i}>
                                <li>{el}</li>
                              </ul>
                            );
                          })
                        : ""}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
            <Speech
              text={text}
              startBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <PlayArrowIcon /> Click to Hear
                </Button>
              }
              stopBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                  onClick={() => {
                    setPLay(!play);
                  }}
                >
                  <StopIcon /> Stop
                </Button>
              }
            />
          </Typography>
          {props.el.card ? (
            <Card
              sx={{
                background:
                  "linear-gradient(109.6deg, rgb(27, 27, 79) 11.2%, rgb(120, 201, 244) 100.2%)",
                borderRadius: "30px",
              }}
            >
              <CardContent sx={{ color: "white" }}>
                <Typography>KEY TAKEWAYS</Typography>
                <ul>
                  {props.el.card.map((el, i) => {
                    return <li key={i}>{el}</li>;
                  })}
                </ul>
              </CardContent>
            </Card>
          ) : (
            ""
          )}
        </div>
      </Box>
    </div>
  );
}

export default ContentSection;
