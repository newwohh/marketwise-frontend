import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box, Container, ThemeProvider, useTheme } from "@mui/material";

import useContentTopStyles from "../../../../styles/Home/ContentTop";
import { contenTopData } from "../../../../dev-data/data";
import ContentTopCard from "./ContentTopCard";

function ContentTop() {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [expanded1, setExpanded1] = React.useState(false);
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  const [expanded2, setExpanded2] = React.useState(false);
  const handleExpandClick2 = () => {
    setExpanded2(!expanded2);
  };
  const contentTopClasses = useContentTopStyles;
  const theme = useTheme();
  return (
    <React.Fragment>
      <section style={contentTopClasses.section}>
        <div style={contentTopClasses.firstdiv}>
          <Typography
            variant="h3"
            align="center"
            textAlign="center"
            sx={{
              fontFamily: "Arial",
              color: "#002244",
              fontWeight: 1000,
              "@media (max-width: 1000px)": {
                fontSize: "25px",
              },
            }}
          >
            Explore endless possiblities with MarketWise
          </Typography>
          <Container
            sx={{
              // width: "350",
              display: "flex",
              justifyContent: "space-around",
              justifyItems: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: "50px",
              "@media (max-width: 1000px)": {
                flexDirection: "column",
              },
            }}
          >
            <Card
              sx={{
                height: 350,
                width: "300vh",
                marginRight: 5,
                backgroundColor: "#F0F8FF",
                color: "#002244",
                transition: "transform 0.3s",
                "&:hover": {
                  boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                "@media (max-width: 1000px)": {
                  marginTop: "30px",
                  marginRight: 0,
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  height: "350px",
                  alignItems: "center",
                },
              }}
              onMouseEnter={handleExpandClick1}
              onMouseLeave={handleExpandClick1}
            >
              <CardHeader />
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">Learn with MarketWise</Typography>
                </ThemeProvider>
                <Typography variant="body2">
                  MarketWise is the ultimate platform for anyone looking to
                  learn about trading. With its comprehensive resources,
                  including up-to-date news, analysis, and expert insights on
                  forex, cryptocurrency, and the stock market, you'll have
                  everything you need to get started and succeed in trading.
                </Typography>
              </CardContent>
              <Collapse in={expanded1} timeout="auto" unmountOnExit>
                <CardContent>
                  <Link href="/education" sx={contentTopClasses.firstcardlinks}>
                    Learn More
                  </Link>
                </CardContent>
              </Collapse>
            </Card>
            <Card
              sx={{
                backgroundColor: "#F0F8FF",
                width: "300vh",
                marginRight: 5,
                height: 350,
                transition: "transform 0.3s",
                color: "#002244",
                "&:hover": {
                  boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                "@media (max-width: 1000px)": {
                  marginTop: "30px",
                  marginRight: 0,
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  height: "350px",
                  alignItems: "center",
                },
              }}
              onMouseEnter={handleExpandClick}
              onMouseLeave={handleExpandClick}
            >
              <CardHeader />
              <CardContent>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">Grow with MarketWise</Typography>
                </ThemeProvider>
                <Typography variant="body2">
                  Our platform provides traders and investors with advanced
                  tools to track, analyze and monitor their investments. With
                  MarketWise, you can stay up-to-date with the latest market
                  trends, analyze historical data, and make informed investment
                  decisions.
                </Typography>
              </CardContent>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Link to="/grow" sx={contentTopClasses.firstcardlinks}>
                    Learn More
                  </Link>
                </CardContent>
              </Collapse>
            </Card>
            <Card
              sx={{
                width: "300vh",
                marginRight: 5,
                height: 350,
                backgroundColor: "#F0F8FF",
                color: "#002244",
                transition: "transform 0.3s",
                "&:hover": {
                  boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                },
                "@media (max-width: 1000px)": {
                  marginTop: "30px",
                  marginRight: 0,
                  display: "flex",
                  flexDirection: "column",
                  width: "300px",
                  height: "350px",
                  alignItems: "center",
                },
              }}
              onMouseEnter={handleExpandClick2}
              onMouseLeave={handleExpandClick2}
            >
              <CardHeader />
              <CardContent sx={{ color: "#002244" }}>
                <ThemeProvider theme={theme}>
                  <Typography variant="h5">
                    Dive into endless opportunities
                  </Typography>
                </ThemeProvider>
                <Typography variant="body2">
                  With MarketWise, you can dive into the world of trading and
                  unlock your potential for financial growth.
                </Typography>
              </CardContent>
              <Collapse in={expanded2} timeout="auto" unmountOnExit>
                <CardContent>
                  <Link href="/explore" sx={contentTopClasses.firstcardlinks}>
                    Learn More
                  </Link>
                </CardContent>
              </Collapse>
            </Card>
          </Container>
        </div>
        <div style={contentTopClasses.seconddivmain}>
          <div style={contentTopClasses.secondivtitle}>
            <div>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "Arial",
                  color: "#002244",
                  fontWeight: 1000,
                  "@media (max-width: 1000px)": {
                    fontSize: "25px",
                  },
                }}
              >
                Trusted Market Tracker
              </Typography>
              <Link
                to="/user_protection"
                style={contentTopClasses.secondivlink}
              >
                Learn More
              </Link>
            </div>
            <div style={contentTopClasses.securecontentdiv}>
              <Box
                sx={{
                  "@media (max-width: 1000px)": {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                }}
              >
                {contenTopData.map((el, i) => {
                  return (
                    <ContentTopCard
                      title={el.title}
                      description={el.description}
                      i={i}
                    />
                  );
                })}
              </Box>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default ContentTop;
