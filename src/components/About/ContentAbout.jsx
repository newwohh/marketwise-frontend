import React from "react";
import useAbout from "../../styles/About/About";
import { Typography } from "@mui/material";

function ContentAbout() {
  const ContentAboutClass = useAbout();
  return (
    <div className={ContentAboutClass.mainabout}>
      <div className={ContentAboutClass.contentdiv}>
        <Typography
          sx={{ fontWeight: 600, marginTop: "200px", color: "#002244" }}
          variant="h2"
        >
          About TradeView
        </Typography>
        <Typography variant="p">
          Hi, I'm Nevin Raju, a software developer who created TradeView, a
          platform for tracking stock market, cryptocurrency, and forex. I'm
          passionate about helping people make informed financial decisions, and
          I believe that TradeView can be a valuable tool for anyone who wants
          to stay ahead of the markets.I'm always looking for ways to improve
          TradeView, so if you have any feedback, please don't hesitate to
          contact me. I'm also interested in hearing about your own experiences
          with financial trading, so please feel free to share them with me.
        </Typography>
      </div>
      <div className={ContentAboutClass.contentdivtwo}>
        <Typography variant="h4" sx={{ fontWeight: "600", color: "#002244" }}>
          Here are some additional details about TradeView:
        </Typography>
        <ul>
          <li>
            TradeView is a web-based platform, so you can access it from
            anywhere.
          </li>
          <li>
            TradeView is free to use, but there are premium features available
            for a monthly subscription.
          </li>
          <li>
            TradeView offers a variety of features to help you track your
            investments, including real-time data, charts, and analysis tools.
          </li>
          <li>
            TradeView is a secure platform, and your data is protected with
            industry-standard encryption.
          </li>
        </ul>
      </div>
      <Typography
        variant="p"
        sx={{ marginTop: "100px", marginBottom: "200px" }}
      >
        Thank you for visiting TradeView!
      </Typography>
    </div>
  );
}

export default ContentAbout;
