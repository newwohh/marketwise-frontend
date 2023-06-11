import { Typography } from "@mui/material";
import React from "react";
import useExploreContent from "../../../styles/Explore/ExploreContent";
import { ThemeProvider } from "@mui/material";
import theme from "../../../styles/Theme";

function ContentExplore() {
  const ExploreContentClasses = useExploreContent();

  return (
    <main>
      <ThemeProvider theme={theme}>
        <section className={ExploreContentClasses.sectionexplore}>
          <div className={ExploreContentClasses.titledivexplore}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 1000,
                color: "white",
              }}
            >
              MarketWise
            </Typography>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 1000,
                background:
                  "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Your One-Stop Shop for Trading
            </Typography>
          </div>
        </section>
        <section className={ExploreContentClasses.secondsection}></section>
      </ThemeProvider>
    </main>
  );
}

export default ContentExplore;
