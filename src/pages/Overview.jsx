import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import useOverviewStyles from "../styles/Overview/Overview";
import { Divider, Grid, ThemeProvider } from "@mui/material";
import theme from "../styles/Theme";
import { Outlet, useLocation } from "react-router-dom";
import OverviewNewsCard from "../components/Overview/OverviewNewsCard";
import OverviewPriceTable from "../components/Overview/OverviewPriceTable";
import { useScrollToTop, TabPanel } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function Overview(props) {
  titleHandler("Overview");
  useScrollToTop();
  const OverviewClasses = useOverviewStyles;
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let prices, news, title, about;
  if (props.crypto) {
    prices = props.crypto;
    news =
      props.cryptonews.results === undefined
        ? [{ name: "name" }]
        : props.cryptonews.results;

    title = "Crypto";
    about =
      "A cryptocurrency is a fully decentralized, secure, digital currency whose creation is controlled by cryptography – and the industry is almost as popular as a high school quarterback these days. They're not issued or regulated by a central bank, and their prices are purely based on supply and demand. Of course, Bitcoin was the OG crypto, launched in 2009, but there have been a multitude of currencies released since then and the market's overall value is now around the $1tn mark. This page will show you ideas, financials, news, and more for the cryptocurrency market. ";
  } else if (props.stocks !== props.crypto) {
    prices = props.stocks[0] === undefined ? [] : props.stocks[2];
    console.log(prices);
    news = props.stocknews;
    title = "Stocks";
    about =
      "Stocks, or equities, are shares of ownership that entitle the holder to a part of a company's assets and earnings, and they're bought and sold on the stock market. With 60 major stock exchanges globally, 16 of which have a market cap of over $1tn, the stock market offers opportunities for everyone. The US market hosts multiple globally renowned exchanges and has a reputation for trading strong, high-quality securities featuring some of the world's most actively traded companies. This page will show you ideas, financials, news, and more for the US stock market. ";
  } else if (props.forex) {
    prices = props.forex;
  }
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  console.log(prices, news);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <NavBar />
        <main style={OverviewClasses.overviewmain}>
          <Box sx={OverviewClasses.contentdiv}>
            <Box
              sx={{
                "@media (max-width:1000px)": {
                  fontSize: 20,
                  marginLeft: 2,
                  marginBottom: 5,
                },
              }}
            >
              <Typography variant="p" sx={{ color: "grey" }}>
                Markets
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  "@media (max-width:1000px)": {
                    fontSize: 20,
                  },
                }}
              >
                {props.crypto ? "Cryptocurrency" : "Stock Market"}
              </Typography>
            </Box>
            <Box sx={OverviewClasses.introoverview}>
              <div>
                <Box
                  sx={{
                    width: "1200px",
                    marginTop: "50px",
                    backgroundColor: "#F0F8FF",
                    "@media (max-width:1000px)": {
                      width: "300px",
                    },
                  }}
                >
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="News" />
                      <Tab label={title} />
                      <Tab label="Item Three" />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3, sm: 1 }}
                      columns={{ xs: 1, sm: 1, md: 12 }}
                    >
                      {news.map((el, i) => {
                        return (
                          <Grid item xs={2} sm={4} md={4} key={i}>
                            <OverviewNewsCard el={el} />
                          </Grid>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <OverviewPriceTable title={title} prices={prices} />
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </Box>
              </div>
              <div style={OverviewClasses.overviewrightsection}>
                <Typography sx={{ color: "#002244" }}>About</Typography>
                <Divider />
                <Typography variant="p" sx={{ color: "grey" }}>
                  {about}
                </Typography>
              </div>
            </Box>
          </Box>
          <Outlet />
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Overview;
