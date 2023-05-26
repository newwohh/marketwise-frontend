import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import useOverviewStyles from "../styles/Overview/Overview";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Divider, Grid, ThemeProvider } from "@mui/material";
import theme from "../styles/Theme";
import { Link } from "react-router-dom";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
function Overview(props) {
  const OverviewClasses = useOverviewStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  let prices;
  let news;
  if (props.crypto) {
    prices = props.crypto;
    news =
      props.cryptonews.results === undefined
        ? [{ name: "name" }]
        : props.cryptonews.results;
  } else if (props.stocks !== props.crypto) {
    prices = props.stocks[0] === undefined ? [] : props.stocks[0].results;
    news = props.stocknews;
  } else if (props.forex) {
    prices = props.forex;
  }
  useCallback(() => {
    console.log(prices, news);
  }, []);
  console.log(prices, news);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <NavBar />
        <main className={OverviewClasses.overviewmain}>
          <div className={OverviewClasses.contentdiv}>
            <div>
              <Typography variant="p" sx={{ color: "grey" }}>
                Markets
              </Typography>
              <Typography variant="h3">
                {props.crypto ? "Crypto Market" : "Stock Market"}
              </Typography>
            </div>
            <div className={OverviewClasses.introoverview}>
              <div>
                <Box
                  sx={{
                    width: "1200px",
                    marginTop: "50px",
                    backgroundColor: "#F0F8FF",
                  }}
                >
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      aria-label="basic tabs example"
                    >
                      <Tab label="News" {...a11yProps(0)} />
                      <Tab label="Stocks" {...a11yProps(1)} />
                      <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <TabPanel value={value} index={0}>
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                      {news.map((el, i) => {
                        return (
                          <Grid item xs={2} sm={4} md={4} key={i}>
                            <Card sx={{ maxWidth: 345 }}>
                              <CardMedia
                                component="img"
                                alt="No Image Read the Article"
                                height="140"
                                image={el.image_url}
                              />
                              <CardContent>
                                <Typography
                                  gutterBottom
                                  variant="h5"
                                  component="div"
                                >
                                  <Link className={OverviewClasses.cardlink}>
                                    {el.title}
                                  </Link>
                                </Typography>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  {el.description}
                                </Typography>
                              </CardContent>
                              <CardActions>
                                <Link
                                  to={el.article_url}
                                  className={OverviewClasses.overviewcardlink}
                                >
                                  Click to see the full article
                                </Link>
                              </CardActions>
                            </Card>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <TableContainer
                      component={Paper}
                      sx={{ backgroundColor: "#F0F8FF" }}
                    >
                      <Table sx={{ minWidth: 650, backgroundColor: "#F0F8FF" }}>
                        <TableHead>
                          <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Calories</TableCell>
                            <TableCell align="right">Fat&nbsp;(g)</TableCell>
                            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">
                              Protein&nbsp;(g)
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {prices.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:hover": {
                                  backgroundColor: "#E1EBEE",
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {row.market ? row.market : row.rank}
                              </TableCell>
                              <TableCell align="right">{row.name}</TableCell>
                              <TableCell align="right">
                                {row.ticker ? row.ticker : row.price_usd}
                              </TableCell>
                              <TableCell align="right">
                                {row.type ? row.type : row.symbol}
                              </TableCell>
                              <TableCell align="right">
                                {row.currency_name}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
                  </TabPanel>
                </Box>
              </div>
              <div className={OverviewClasses.overviewrightsection}>
                <Typography>About</Typography>
                <Divider />
                <Typography variant="p">
                  Stocks, or equities, are shares of ownership that entitle the
                  holder to a part of a company's assets and earnings, and
                  they're bought and sold on the stock market. With 60 major
                  stock exchanges globally, 16 of which have a market cap of
                  over $1tn, the stock market offers opportunities for everyone.
                  The US market hosts multiple globally renowned exchanges and
                  has a reputation for trading strong, high-quality securities
                  featuring some of the world's most actively traded companies.
                  This page will show you ideas, financials, news, and more for
                  the US stock market.
                </Typography>
              </div>
            </div>
          </div>
        </main>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default Overview;