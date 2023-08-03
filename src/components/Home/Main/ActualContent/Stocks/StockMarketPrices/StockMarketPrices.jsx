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
import { Button, Skeleton, ThemeProvider, Tooltip } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useStockMarketPrices from "../../../../../../styles/Home/StockMarketPricesStyles";
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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
  const [value, setValue] = React.useState(0);
  const dispatch = useDispatch();
  const stockprice = useSelector((state) => state.news.stockprice);
  const themes = useTheme();
  const StockPriceClasses = useStockMarketPrices;
  const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
    // console.log(stockprice);
  }, [setDataApi]);
  const tickers =
    stockprice[0] === undefined
      ? [{ name: "sorry" }]
      : stockprice[0]?.results?.slice(0, 20);
  const exchanges =
    stockprice === undefined || stockprice === [] || stockprice[1] === undefined
      ? [{ name: "sorry" }]
      : stockprice[1].results;
  const dividents =
    stockprice === undefined || stockprice === [] || stockprice[2] === undefined
      ? [{ name: "sorry" }]
      : stockprice[2].results;

  return (
    <div style={StockPriceClasses.containerstockprice}>
      <div style={StockPriceClasses.firstdiv}>
        <div>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h3"
              sx={{
                marginTop: "100px",
                color: "#002244",
                "@media (max-width: 1000px)": {
                  fontSize: "25px",
                },
              }}
            >
              Stock Exchange
            </Typography>
            <Typography
              variant="p"
              sx={{
                color: "#002244",
                marginBottom: "150px",
                "@media (max-width: 1000px)": {
                  fontSize: "10px",
                },
              }}
            >
              Know What's UP in Stocks
            </Typography>
          </ThemeProvider>
        </div>
      </div>
      <div style={StockPriceClasses.firstdiv}>
        <Box
          sx={{
            marginTop: "100px",
            width: 1500,
            height: "250px",
            "@media (max-width: 1000px)": {
              width: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            },
          }}
        >
          <AppBar
            position="static"
            sx={{
              backgroundColor: "#F0F8FF",
              boxShadow: "none",
              "@media (max-width: 1000px)": {
                width: 300,
                textAlign: "center",
              },
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="full width tabs example"
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab
                label="Exchanges"
                sx={{
                  color: "#002244",
                  "@media (max-width: 1000px)": {
                    width: "50px",
                    fontSize: "10px",
                  },
                }}
              />
              <Tab
                label="Dividents"
                sx={{
                  color: "#002244",
                  "@media (max-width: 1000px)": {
                    width: "50px",
                    fontSize: "10px",
                  },
                }}
              />
              <Tab
                label="Tickers"
                sx={{
                  color: "#002244",
                  "@media (max-width: 1000px)": {
                    width: "50px",
                    fontSize: "10px",
                  },
                }}
              />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={themes.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TableContainer
              component={Paper}
              sx={{
                height: 500,
                width: 1500,
                color: "white",
                backgroundColor: "#F0F8FF",
                "@media (max-width: 1000px)": {
                  width: "300px",
                },
              }}
              value={value}
              index={0}
              dir={themes.direction}
            >
              <Table
                sx={{
                  width: 1500,
                  color: "white",
                  "@media (max-width: 1000px)": {
                    width: "300px",
                  },
                }}
              >
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
                  {exchanges === undefined || stockprice === []
                    ? loaderArray.map((el, i) => {
                        return (
                          <Box sx={{ pt: 0.5 }}>
                            <Skeleton
                              variant="rectangular"
                              width={450}
                              height={30}
                            />
                            <Skeleton variant="circular" />
                            <Skeleton variant="rectangular" width={100} />
                          </Box>
                        );
                      })
                    : exchanges.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            color: "#002244",
                            "&:hover": {
                              backgroundColor: "#E1EBEE",
                            },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            sx={{ color: "#002244" }}
                          >
                            <Tooltip
                              title={row.name ? row.name : "Data not found!"}
                            >
                              <Link
                                style={StockPriceClasses.exchangesLink}
                                to={row.url || ""}
                              >
                                {row.name ? row.name : "Data not found!"}
                              </Link>
                            </Tooltip>
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            <Typography variant="p" sx={{ fontWeight: 600 }}>
                              {row.asset_class === undefined
                                ? "Data not found!"
                                : row.asset_class.toUpperCase()}
                            </Typography>
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.locale === undefined
                              ? "Data not found!"
                              : row.locale.toUpperCase()}
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.operating_mic}
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.currency_name}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{
                height: 500,
                width: 1500,
                backgroundColor: "#F0F8FF",
              }}
              value={value}
              index={1}
              dir={themes.direction}
            >
              <Table
                sx={{
                  width: 1500,
                  height: 800,
                  "@media (max-width: 1000px)": {
                    width: "300px",
                  },
                }}
              >
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
                  {dividents === undefined || stockprice === []
                    ? loaderArray.map((el, i) => {
                        return (
                          <Box sx={{ pt: 0.5 }}>
                            <Skeleton
                              variant="rectangular"
                              width={450}
                              height={30}
                            />
                            <Skeleton variant="circular" />
                            <Skeleton variant="rectangular" width={100} />
                          </Box>
                        );
                      })
                    : dividents.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            color: "#002244",
                            "&:hover": {
                              backgroundColor: "#E1EBEE",
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Link
                              to={row.url || "#"}
                              style={StockPriceClasses.exchangesLink}
                            >
                              {row.ticker ? row.ticker : "Data not found!"}
                            </Link>
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.cash_amount}
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            <Button
                              variant="outlined"
                              sx={{
                                color: "#002244",
                                width: "50px",
                                borderRadius: 3,
                                "&:hover": {
                                  backgroundColor: "#002244",
                                  color: "#002244",
                                },
                              }}
                            >
                              {row.currency ? row.currency : "Data not found!"}
                            </Button>
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.dividend_type
                              ? row.dividend_type
                              : "Data not found!"}
                          </TableCell>
                        </TableRow>
                      ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TableContainer
              component={Paper}
              sx={{
                height: 500,
                width: 1500,
                backgroundColor: "#F0F8FF",
              }}
              value={value}
              index={2}
              dir={themes.direction}
            >
              <Table
                sx={{
                  width: 1500,
                  height: 800,
                  "@media (max-width: 1000px)": {
                    width: "300px",
                  },
                }}
              >
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
                  {tickers === undefined || stockprice === []
                    ? loaderArray.map((el, i) => {
                        return (
                          <Box sx={{ pt: 0.5 }}>
                            <Skeleton
                              variant="rectangular"
                              width={450}
                              height={30}
                            />
                            <Skeleton variant="circular" />
                            <Skeleton variant="rectangular" width={100} />
                          </Box>
                        );
                      })
                    : tickers.map((row, i) => (
                        <TableRow
                          key={i}
                          sx={{
                            "&:hover": {
                              backgroundColor: "#E1EBEE",
                            },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Link style={StockPriceClasses.exchangesLink}>
                              {row.name ? row.name : "Data not found!"}
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
                              {row.currency_name === undefined
                                ? "Data not found!"
                                : row.currency_name.toUpperCase()}
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
                                {row.primary_exchange
                                  ? row.primary_exchange
                                  : "Data not found!"}
                              </Button>
                            ) : (
                              ""
                            )}
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.locale === undefined
                              ? "Data not found!"
                              : row.locale.toUpperCase()}
                          </TableCell>
                          <TableCell align="right" sx={{ color: "#002244" }}>
                            {row.ticker ? row.ticker : "Data not found!"}
                          </TableCell>
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
