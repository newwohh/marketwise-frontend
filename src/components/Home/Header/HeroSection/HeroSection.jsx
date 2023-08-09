import React from "react";
import useHeaderStyles from "../../../../styles/Home/HeaderSectionStyles";
import { ThemeProvider, Typography, Button } from "@mui/material";
import theme from "../../../../styles/Theme";
import TextAnimation from "react-text-animations";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function HeroSection() {
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
            style={headerClasses.headerintrotext}
            sx={{
              fontSize: {
                xs: "30px",
              },
              marginTop: "370px",
              color: "white",
              zIndex: 1,
              position: "absolute",

              left: 0,
              right: 0,
              textAlign: "center",
              fontWeight: 1000,
              background:
                "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
              backgroundClip: "text",
              WebkitTextFillColor: "black",
            }}
          >
            <TextAnimation.Slide
              target="Trade"
              text={["Learn", "Grow", "Explore"]}
              animation={{
                duration: 1000,
                delay: 2000,
                timingFunction: "ease-out",
              }}
            >
              Trade Beyond Limits
            </TextAnimation.Slide>
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
            sx={{
              width: "200px",
              borderRadius: "40px",
              height: "55px",
              border: "3px solid #002244",
              marginTop: "600px",
              color: "#002244",
              position: "absolute",
              zIndex: 1,
              marginLeft: "50%",
              marginRight: "50%",
              "&:hover": {
                backgroundColor: "#F5F5F5",
                border: "1px solid #F5F5F5",
                color: "black",
              },
            }}
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
