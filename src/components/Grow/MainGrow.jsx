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
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import dataReal from "../../assets/2210.i039.005.S.m004.c13.data economy isometric.jpg";
import bgrowth from "../../assets/sl_033020_29450_24.jpg";
import research from "../../assets/MyApril6.jpg";
import education from "../../assets/5836.jpg";
import { Link } from "react-router-dom";
import { growData } from "../../dev-data/data";

const imgArr = [dataReal, bgrowth, research, education];

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
          {growData.slice(0, 4).map((el, i) => {
            return (
              <Box
                sx={{
                  left: 0,
                  right: 0,
                  width: "1200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "100px",
                  borderRadius: "25px",
                  backgroundColor: "white",
                  border: "1rem solid #aaaaff",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                  borderImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 5px, $accentColor 6px, $accentColor 15px, transparent 16px, transparent 20px) 20/1rem",
                  "@media (max-width:1000px)": {
                    flexDirection: "column",
                    width: "300px",
                    overflow: "hidden",
                  },
                }}
                key={i}
              >
                <Paper>
                  <img
                    src={imgArr[i]}
                    alt="datareal"
                    style={MainGrowClasses.growimg}
                  />
                </Paper>
                <div>
                  <Typography variant="h4">{el.title}</Typography>
                  <Typography variant="p">{el.description}</Typography>
                </div>
                <Divider />
              </Box>
            );
          })}
        </Box>
        <Box sx={MainGrowClasses.infosection}>
          <div style={MainGrowClasses.infodivgrow}>
            <div>
              <Typography variant="h3">
                We help you to Become an Expert
              </Typography>
            </div>
            <div style={MainGrowClasses.infosubdivgrow}>
              {growData.slice(4, 7).map((el, i) => {
                return (
                  <div style={MainGrowClasses.infosubcontentdivgrow} key={i}>
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
                        to={el?.link}
                        style={{
                          color: "white",
                          textDecoration: "none",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        {el.title}
                      </Link>
                    </Typography>
                    <Typography variant="p">{el.description}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </Box>
      </ThemeProvider>
    </main>
  );
}

export default MainGrow;
