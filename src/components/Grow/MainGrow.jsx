import { Button, Divider, ThemeProvider, Typography } from "@mui/material";
import React, { useRef } from "react";
import theme from "../../styles/Theme";
import useMainGrowStyles from "../../styles/Grow/MainGrow";
import { Zoom } from "react-reveal";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import dataReal from "../../assets/2210.i039.005.S.m004.c13.data economy isometric.jpg";
import bgrowth from "../../assets/sl_033020_29450_24.jpg";
import research from "../../assets/MyApril6.jpg";
import education from "../../assets/5836.jpg";

function MainGrow() {
  const refgrow = useRef(null);
  const MainGrowClasses = useMainGrowStyles();
  return (
    <main>
      <ThemeProvider theme={theme}>
        <section className={MainGrowClasses.firstsection}>
          <Typography
            align="center"
            variant="h1"
            sx={{ marginTop: "50px", color: "white" }}
          >
            Grow with Trade View
          </Typography>
          <Typography sx={{ color: "white", margin: 5 }}>
            Trade View is a comprehensive market tracking platform that provides
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
              border: "3px solid white",
              borderRadius: "13px",
              width: "250px",
              color: "white",
            }}
          >
            Click to See
            <ArrowDownwardIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </section>
        <section ref={refgrow} className={MainGrowClasses.secondsectiongrow}>
          <Zoom>
            <div className={MainGrowClasses.contentdiv}>
              <div>
                <img
                  src={dataReal}
                  className={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <div>
                <Typography variant="h4">Real-time data</Typography>
                <Typography variant="p">
                  Trade View provides real-time data for all major markets, so
                  you can stay up-to-date on the latest price movements.
                </Typography>
              </div>
              <Divider />
            </div>
          </Zoom>
          <Zoom>
            <div className={MainGrowClasses.contentdiv}>
              <div>
                <Typography variant="h4">Advanced charting</Typography>
                <Typography variant="p">
                  Trade View's advanced charting tools allow you to analyze
                  market data and identify trends.
                </Typography>
              </div>
              <div>
                <img
                  src={bgrowth}
                  className={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <Divider />
            </div>
          </Zoom>
          <Zoom>
            <div className={MainGrowClasses.contentdiv}>
              <div>
                <img
                  src={research}
                  className={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <div>
                <Typography variant="h4">Research and analysis</Typography>
                <Typography variant="p">
                  Trade View provides access to a wealth of research and
                  analysis from leading financial experts.
                </Typography>
              </div>
              <Divider />
            </div>
          </Zoom>
          <Zoom>
            <div className={MainGrowClasses.contentdiv}>
              <div>
                <Typography variant="h4">Educational resources</Typography>
                <Typography variant="p">
                  Trade View offers a variety of educational resources to help
                  you learn more about investing.
                </Typography>
              </div>
              <div>
                <img
                  src={education}
                  className={MainGrowClasses.growimg}
                  alt="datareal"
                />
              </div>
              <Divider />
            </div>
          </Zoom>
        </section>
        <section className={MainGrowClasses.infosection}>
          <div className={MainGrowClasses.infodivgrow}>
            <div>
              <Typography variant="h3">
                We help you to Become an Expert
              </Typography>
            </div>
            <div className={MainGrowClasses.infosubdivgrow}>
              <div className={MainGrowClasses.infosubcontentdivgrow}>
                <Typography variant="h6">Security</Typography>
                <Typography variant="p">
                  Trade View is committed to security and uses the latest
                  security measures to protect your data. You can be confident
                  that your data is safe with Trade View.
                </Typography>
              </div>
              <div className={MainGrowClasses.infosubcontentdivgrow}>
                <Typography variant="h6">Pricing</Typography>
                <Typography variant="p">
                  Trade View offers a variety of pricing plans to fit your
                  needs. You can choose a plan that meets your budget and your
                  trading needs.
                </Typography>
              </div>
              <div className={MainGrowClasses.infosubcontentdivgrow}>
                <Typography variant="h6">Sign up today</Typography>
                <Typography variant="p">
                  f you are ready to start growing your wealth, sign up for
                  Trade View today. You won't be disappointed.
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </ThemeProvider>
    </main>
  );
}

export default MainGrow;
