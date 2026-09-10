import React, { useEffect, useState } from "react";
import useHeaderStyles from "../../../../styles/Home/HeaderSectionStyles";
import { ThemeProvider, Typography, Button, Box } from "@mui/material";
import theme from "../../../../styles/Theme";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { getRandomNumber } from "../../../../actions/actions";

const texts = ["Explore", "Trade", "Think", "Grow"];

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
            <Box
              component="span"
              key={textIndex}
              sx={{
                display: "inline-block",
                animation: "hero-enter 500ms ease-out 300ms both",
                "@keyframes hero-enter": { from: { opacity: 0, transform: "translateY(12px)" }, to: { opacity: 1, transform: "translateY(0)" } },
                "@media (prefers-reduced-motion: reduce)": { animation: "none" },
              }}
            >
              {`${texts[textIndex]} Beyond Limits`}
            </Box>
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
