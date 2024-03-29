import React from "react";
import useAbout from "../../styles/About/About";
import { Typography, Box } from "@mui/material";
import { aboutData } from "../../dev-data/data";

function ContentAbout() {
  const ContentAboutClass = useAbout;
  return (
    <Box sx={ContentAboutClass.mainabout}>
      <Box sx={ContentAboutClass.contentdiv}>
        <Typography
          sx={{
            fontWeight: 600,
            marginTop: "200px",
            color: "#002244",
            "@media (max-width:1000px)": {
              fontSize: "30px",
              marginTop: "100px",
            },
          }}
          variant="h2"
        >
          About MarketWise
        </Typography>
        <Typography variant="p">
          Hi, I'm Nevin Raju, a software developer who created MarketWise, a
          platform for tracking stock market, cryptocurrency, and forex. I'm
          passionate about helping people make informed financial decisions, and
          I believe that MarketWise can be a valuable tool for anyone who wants
          to stay ahead of the markets.I'm always looking for ways to improve
          MarketWise, so if you have any feedback, please don't hesitate to
          contact me. I'm also interested in hearing about your own experiences
          with financial trading, so please feel free to share them with me.
        </Typography>
      </Box>
      <Box sx={ContentAboutClass.contentdivtwo}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "600",
            color: "#002244",
            "@media (max-width:1000px)": {
              fontSize: "30px",
            },
          }}
        >
          Here are some additional details about MarketWise:
        </Typography>
        <ul>
          {aboutData.map((el, i) => {
            return <li>{el.text}</li>;
          })}
        </ul>
      </Box>
      <Typography
        variant="p"
        sx={{ marginTop: "100px", marginBottom: "200px" }}
      >
        Thank you for visiting MarketWise!
      </Typography>
    </Box>
  );
}

export default ContentAbout;
