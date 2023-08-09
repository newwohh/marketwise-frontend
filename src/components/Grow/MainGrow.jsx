import {
  Box,
  Button,
  Divider,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import theme from "../../styles/Theme";
import useMainGrowStyles from "../../styles/Grow/MainGrow";
import { Zoom } from "react-reveal";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import dataReal from "../../assets/2210.i039.005.S.m004.c13.data economy isometric.jpg";
import bgrowth from "../../assets/sl_033020_29450_24.jpg";
import research from "../../assets/MyApril6.jpg";
import education from "../../assets/5836.jpg";
import { Link } from "react-router-dom";

function MainGrow() {
  const refgrow = useRef(null);
  const MainGrowClasses = useMainGrowStyles;
  return (
    <main style={{ backgroundColor: "#F0F8FF" }}>
      <ThemeProvider theme={theme}>
        <Box sx={MainGrowClasses.firstsection}>
          <Typography
            align="center"
            variant="h1"
            sx={{
              marginTop: "50px",
              color: "#002244",
              fontSize: { xs: 30, xl: 50 },
            }}
          >
            Grow with MarketWise
          </Typography>
          <Typography sx={{ color: "#002244", margin: 5 }}>
            MarketWise is a comprehensive market tracking platform that provides
            you with the tools you need to make informed investment decisions.
          </Typography>
          <Button
            onClick={() =>
              refgrow.current.scrollIntoView({ behavior: "smooth" })
            }
            sx={{
              left: 0,
              right: 0,
              textAlign: "center",
              border: "3px solid #002244",
              borderRadius: "13px",
              width: "250px",
              color: "#002244",
            }}
          >
            Click to See
            <ArrowDownwardIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </Box>
        <Box ref={refgrow} sx={MainGrowClasses.secondsectiongrow}>
          <Zoom>
            <Box sx={MainGrowClasses.contentdiv}>
              <Paper>
                <img
                  src={dataReal}
                  alt="datareal"
                  style={MainGrowClasses.growimg}
                />
              </Paper>
              <div>
                <Typography variant="h4">Real-time data</Typography>
                <Typography variant="p">
                  MarketWise provides real-time data for all major markets, so
                  you can stay up-to-date on the latest price movements.
                </Typography>
              </div>
              <Divider />
            </Box>
          </Zoom>
          <Zoom>
            <Box sx={MainGrowClasses.contentdiv}>
              <div>
                <Typography variant="h4">Advanced charting</Typography>
                <Typography variant="p">
                  MarketWise's advanced charting tools allow you to analyze
                  market data and identify trends.
                </Typography>
              </div>
              <div>
                <img
                  src={bgrowth}
                  style={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <Divider />
            </Box>
          </Zoom>
          <Zoom>
            <Box sx={MainGrowClasses.contentdiv}>
              <div>
                <img
                  src={research}
                  style={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <div>
                <Typography variant="h4">Research and analysis</Typography>
                <Typography variant="p">
                  MarketWise provides access to a wealth of research and
                  analysis from leading financial experts.
                </Typography>
              </div>
              <Divider />
            </Box>
          </Zoom>
          <Zoom>
            <Box sx={MainGrowClasses.contentdiv}>
              <div>
                <Typography variant="h4">Educational resources</Typography>
                <Typography variant="p">
                  MarketWise offers a variety of educational resources to help
                  you learn more about investing.
                </Typography>
              </div>
              <div>
                <img
                  src={education}
                  style={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <Divider />
            </Box>
          </Zoom>
        </Box>
        <Box sx={MainGrowClasses.infosection}>
          <div style={MainGrowClasses.infodivgrow}>
            <div>
              <Typography variant="h3">
                We help you to Become an Expert
              </Typography>
            </div>
            <div style={MainGrowClasses.infosubdivgrow}>
              <div style={MainGrowClasses.infosubcontentdivgrow}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "10px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Link
                    to="/user_protection"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Security
                  </Link>
                </Typography>
                <Typography variant="p">
                  MarketWise is committed to security and uses the latest
                  security measures to protect your data. You can be confident
                  that your data is safe with MarketWise.
                </Typography>
              </div>
              <div style={MainGrowClasses.infosubcontentdivgrow}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "10px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Pricing
                  </Link>
                </Typography>
                <Typography variant="p">
                  MarketWise offers a variety of pricing plans to fit your
                  needs. You can choose a plan that meets your budget and your
                  trading needs.
                </Typography>
              </div>
              <div style={MainGrowClasses.infosubcontentdivgrow}>
                <Typography
                  variant="h6"
                  sx={{
                    marginBottom: "10px",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  <Link
                    style={{
                      color: "white",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }}
                  >
                    Sign up today
                  </Link>
                </Typography>
                <Typography variant="p">
                  f you are ready to start growing your wealth, sign up for
                  MarketWise today. You won't be disappointed.
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </main>
  );
}

export default MainGrow;
