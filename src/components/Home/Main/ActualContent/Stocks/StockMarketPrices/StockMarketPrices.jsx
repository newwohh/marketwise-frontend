import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockPrice } from "../../../../../../store/store-actions";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useStockMarketPrices from "../../../../../../styles/StockMarketPricesStyles";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function StockMarketPrices() {
  const [dataApi, setDataApi] = useState("");
  const dispatch = useDispatch();
  const stockprice = useSelector((state) => state.news.stockprice);
  const themes = useTheme();
  const [value, setValue] = React.useState(0);
  const StockPriceClasses = useStockMarketPrices();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const getProducts = useCallback(() => {
    dispatch(getStockPrice());
  }, [dataApi]);
  useEffect(() => {
    getProducts();
  }, [dispatch]);
  console.log(stockprice);
  const tickers = stockprice[0].results.slice(0, 20);
  const exchanges = stockprice[1].results;
  const dividents = stockprice[2].results;

  return (
    <div className={StockPriceClasses.containerstockprice}>
      <div className={StockPriceClasses.firstdiv}>
        <div>
          <ThemeProvider theme={theme}>
            <Typography variant="h3" sx={{ color: "#002244" }}>
              Stock Exchange
            </Typography>
            <Typography variant="p" sx={{ color: "#002244" }}>
              Know What's UP in Stocks
            </Typography>
          </ThemeProvider>
        </div>
      </div>
      <div className={StockPriceClasses.firstdiv}>
        <Box sx={{ width: 1500, height: "800px" }}>
          <AppBar position="static" sx={{ backgroundColor: "#002244" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="full width tabs example"
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab label="Exchanges" />
              <Tab label="Dividents" />
              <Tab label="Tickers" />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={themes.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TableContainer
              component={Paper}
              sx={{ height: 800, width: 1500 }}
              value={value}
              index={0}
              dir={themes.direction}
            >
              <Table sx={{ width: 1500 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "grey" }}>Name</TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Asset
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Locale
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      MIC
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {exchanges.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#E1EBEE",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Link
                          className={StockPriceClasses.exchangesLink}
                          to={row.url}
                        >
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right" sx={{ color: "#002244" }}>
                        <Typography variant="p" sx={{ fontWeight: 600 }}>
                          {row.asset_class.toUpperCase()}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        {row.locale.toUpperCase()}
                      </TableCell>
                      <TableCell align="right">{row.operating_mic}</TableCell>
                      <TableCell align="right">{row.currency_name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{ height: 800, width: 1500 }}
              value={value}
              index={1}
              dir={themes.direction}
            >
              <Table sx={{ width: 1500 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "grey" }}>Ticker</TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Amount
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Currency
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Type
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dividents.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#E1EBEE",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Link
                          to={row.url}
                          className={StockPriceClasses.exchangesLink}
                        >
                          {row.ticker}
                        </Link>
                      </TableCell>
                      <TableCell align="right">{row.cash_amount}</TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#002244",
                            width: "50px",
                            borderRadius: 3,
                            "&:hover": {
                              backgroundColor: "#002244",
                              color: "white",
                            },
                          }}
                        >
                          {row.currency}
                        </Button>
                      </TableCell>
                      <TableCell align="right">{row.dividend_type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{ height: 800, width: 1500 }}
              value={value}
              index={2}
              dir={themes.direction}
            >
              <Table sx={{ width: 1500, height: 800 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "grey" }}>Name</TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Currency
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Primary Exchange
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Locale
                    </TableCell>
                    <TableCell sx={{ color: "grey" }} align="right">
                      Ticker
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tickers.map((row, i) => (
                    <TableRow
                      key={i}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#E1EBEE",
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Link className={StockPriceClasses.exchangesLink}>
                          {row.name}
                        </Link>
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#002244",
                            width: "50px",
                            borderRadius: 3,
                            "&:hover": {
                              backgroundColor: "#002244",
                              color: "white",
                            },
                          }}
                        >
                          {row.currency_name.toUpperCase()}
                        </Button>
                      </TableCell>
                      <TableCell align="right">
                        {row.primary_exchange ? (
                          <Button
                            variant="outlined"
                            sx={{
                              color: "#002244",
                              width: "50px",
                              borderRadius: 3,
                              borderColor: "#FA8072",
                              "&:hover": {
                                backgroundColor: "#65000B",
                                color: "white",
                              },
                            }}
                          >
                            {row.primary_exchange}
                          </Button>
                        ) : (
                          ""
                        )}
                      </TableCell>
                      <TableCell align="right">
                        {row.locale.toUpperCase()}
                      </TableCell>
                      <TableCell align="right">{row.ticker}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </SwipeableViews>
        </Box>
      </div>
    </div>
  );
}

export default StockMarketPrices;
