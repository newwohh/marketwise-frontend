import React, { useRef } from "react";
import useLearnContentStyles from "../../../styles/Learn/LearnContentStyles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MonitorIcon from "@mui/icons-material/Monitor";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { contentLearnData } from "../../../dev-data/data";
import ContentSection from "./ContentSection";

function ContentLearn() {
  const managerisk = useRef();
  const whatistrading = useRef();
  const tradingacc = useRef();
  const learnread = useRef();
  const practicetrading = useRef();
  const learnanalyse = useRef();
  const LearnContentClasses = useLearnContentStyles;

  // const refs = [
  //   whatistrading,
  //   tradingacc,
  //   learnread,
  //   learnanalyse,
  //   practicetrading,
  //   managerisk,
  // ];

  console.log(whatistrading);

  return (
    <Box sx={LearnContentClasses.mains}>
      <Box sx={LearnContentClasses.section}>
        <Box sx={LearnContentClasses.titledivlearn}>
          <Box sx={LearnContentClasses.introdiv}>
            <Typography
              variant="h2"
              sx={{ fontFamily: "Helvetica" }}
              align="left"
            >
              MarketWise: The Ultimate Guide to Trading
            </Typography>
            <Typography align="left">
              Welcome to the MarketWise, your one-stop shop for learning about
              cryptocurrency, forex, and stock exchange trading. Whether you're
              a beginner or a seasoned investor, we have the resources you need
              to succeed.
            </Typography>
            <Typography align="left">
              Our website offers a variety of features to help you learn about
              the markets, including:
            </Typography>
            <List sx={{ textAlign: "center" }}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: 600 }}>
                  Real-time market data
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>News and analysis from experts</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  A community of traders to connect with
                </ListItemText>
              </ListItem>
            </List>
            <Typography align="left">
              We believe that everyone should have access to the tools they need
              to make informed investment decisions. That's why we offer our
              website for free. So what are you waiting for? Start learning
              today! Here are some additional details about the features we
              offer:
            </Typography>
            <List sx={{ textAlign: "center" }}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: 600 }}>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    Real-time market data
                  </Typography>
                  We provide real-time market data for all major
                  cryptocurrencies, forex pairs, and stock exchanges. This data
                  can be used to track the markets and make informed trading
                  decisions.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    News and analysis from experts
                  </Typography>
                  We provide news and analysis from leading financial experts.
                  This information can help you stay up-to-date on the latest
                  market trends and make informed investment decisions.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    Educational resources for beginners
                  </Typography>
                  We offer a variety of educational resources for beginners,
                  including articles, videos, and tutorials. These resources can
                  help you learn about the markets and get started with trading.{" "}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    A community of traders to connect with
                  </Typography>
                  We have a community of traders who are always willing to help
                  each other. This community can be a great resource for
                  learning about the markets and getting advice from experienced
                  traders.{" "}
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box sx={LearnContentClasses.navtolearn}>
        <Box
          sx={{
            marginTop: "100px",
            width: "100%",
            height: "100px",
            backgroundColor: "#5D76A9",
            borderRadius: "14px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width:1000px)": {
              height: "300px",
            },
          }}
        >
          <Stack
            direction="row"
            sx={{
              columnGap: "15px",
              "@media (max-width:1000px)": {
                display: "grid",
                rowGap: "5px",
                gridTemplateColumns: "200px",
              },
            }}
          >
            <Chip
              icon={<ShowChartIcon />}
              label="What is Trading"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                whatistrading.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<AccountBalanceIcon />}
              label="Open a Trading Account"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                tradingacc.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<AutoStoriesIcon />}
              label="Read About Trading"
              sx={{
                color: "white",
                height: "40px",
                width: "190px",
                cursor: "pointer",
              }}
              onClick={() =>
                learnread.current.scrollIntoView({ behavior: "smooth" })
              }
            />

            <Chip
              icon={<LocalLibraryIcon />}
              label="Learn to Analyze"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                learnanalyse.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<MonitorIcon />}
              label="Practice Trading"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                practicetrading.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<ErrorOutlineIcon />}
              label="How to Manage Risk"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                managerisk.current.scrollIntoView({ behavior: "smooth" })
              }
            />
          </Stack>
        </Box>
      </Box>
      <Box sx={LearnContentClasses.learncontentdiv}>
        {contentLearnData.map((el, i) => (
          <ContentSection el={el} i={i} key={i} />
        ))}
      </Box>
    </Box>
  );
}

export default ContentLearn;
