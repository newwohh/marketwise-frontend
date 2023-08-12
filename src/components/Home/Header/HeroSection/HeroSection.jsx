import React, { useEffect, useState } from "react";
import useHeaderStyles from "../../../../styles/Home/HeaderSectionStyles";
import { ThemeProvider, Typography, Button } from "@mui/material";
import theme from "../../../../styles/Theme";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = ["Explore", "Trade", "Think", "Grow"];

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function HeroSection() {
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setTextIndex(getRandomNumber(0, texts.length - 1));
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const headerClasses = useHeaderStyles;
  return (
    <section style={headerClasses.section}>
      <div style={headerClasses.headerintrodiv}>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h6"
            align="center"
            sx={{
              marginTop: "330px",
              color: "#002244",
              zIndex: 1,
              position: "absolute",
              left: 0,
              right: 0,
              textAlign: "center",
              fontWeight: 1000,
            }}
          >
            MarketWise Let's You
          </Typography>
          <Typography
            align="center"
            variant="h1"
            noWrap
            sx={headerClasses.headerintrotext}
          >
            <ReactTextTransition
              springConfig={presets.gentle}
              className="big"
              delay={300}
              inline
            >
              {`${texts[textIndex]} Beyond Limits`}
            </ReactTextTransition>
          </Typography>
          <Typography
            variant="p"
            sx={{
              marginTop: "500px",
              color: "#002244",
              position: "absolute",
              zIndex: 1,
              left: 0,
              right: 0,
              textAlign: "center",
            }}
          >
            Join our community today and start taking your trading to the next
            level!
          </Typography>
          <Button
            href="/explore"
            variant="outlined"
            sx={headerClasses.explorebtn}
          >
            Explore Now <ArrowRightAltIcon sx={{ marginLeft: "10px" }} />
          </Button>
        </ThemeProvider>
      </div>
      <div style={{ overflow: "hidden", height: "100vh" }}></div>
    </section>
  );
}

export default HeroSection;
