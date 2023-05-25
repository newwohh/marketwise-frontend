import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoPrice } from "../../../../../../store/store-actions";
import {
  Button,
  Container,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import useCryptoMarket from "../../../../../../styles/Home/CryptoMarketStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

function CryptoMarket() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const [dataApi, setDataApi] = useState("");
  const dispatch = useDispatch();
  const { prices } = useSelector((state) => state.news);
  const CryptoMarketClass = useCryptoMarket();
  const getProducts = useCallback(() => {
    dispatch(getCryptoPrice());
  }, [dataApi]);
  useEffect(() => {
    getProducts();
  }, [dataApi]);
  const rows = prices;
  return (
    <div className={CryptoMarketClass.cryptomarketcontainer}>
      {isMatch ? (
        <div>
          <div className={CryptoMarketClass.cryptomarkettopdiv}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  marginTop: "100px",
                  color: "#002244",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  "@media (max-width : 1000px)": {
                    fontSize: "25px",
                  },
                }}
              >
                Crypto Market
              </Typography>
              <Typography
                variant="p"
                align="center"
                sx={{
                  color: "#002244",
                  marginBottom: "100px",
                  "@media (max-width : 1000px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Know Prices and Values
              </Typography>
            </ThemeProvider>
          </div>
          <div className={CryptoMarketClass.cryptopricediv}>
            <div
              style={{
                marginBottom: "50px",
              }}
            >
              <TableContainer
                component={Paper}
                sx={{
                  backgroundColor: "#F0F8FF",
                  "@media (max-width : 1000px)": {
                    width: "350px",
                  },
                }}
              >
                <Table
                  sx={{
                    width: 650,
                    "@media (max-width : 1000px)": {
                      width: "300px",
                    },
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow
                      sx={{
                        "@media (max-width : 1000px)": {
                          width: "100px",
                        },
                      }}
                    >
                      <TableCell
                        style={{ color: "grey" }}
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Rank
                      </TableCell>
                      <TableCell
                        style={{ color: "grey" }}
                        align="right"
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Symbol
                      </TableCell>
                      <TableCell
                        style={{ color: "grey" }}
                        align="right"
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        style={{ color: "grey" }}
                        align="right"
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Price $
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(0, 5).map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          cursor: "pointer",
                          "&:hover": {
                            // backgroundColor: "azure",
                          },
                          "@media (max-width : 1000px)": {
                            width: "10px",
                          },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: "#002244" }}
                        >
                          {row.rank}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "#002244", fontWeight: 1000 }}
                        >
                          {row.symbol}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "#002244", fontWeight: 1000 }}
                        >
                          <Button
                            variant="outlined"
                            sx={{
                              borderRadius: "15px",
                              fontWeight: 600,
                              color: "#002244",
                              "&:hover": {
                                backgroundColor: "#002244",
                                color: "white",
                              },
                            }}
                          >
                            {row.name}
                          </Button>
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "#002244", fontWeight: 600 }}
                        >
                          {row.price_usd}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div>
              <TableContainer
                component={Paper}
                sx={{
                  backgroundColor: "#F0F8FF",
                  "@media (max-width : 1000px)": {
                    width: "350px",
                  },
                }}
              >
                <Table
                  sx={{
                    width: 650,
                    "@media (max-width : 1000px)": {
                      width: "300px",
                    },
                  }}
                  aria-label="simple table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{ color: "grey" }}
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Rank
                      </TableCell>
                      <TableCell
                        style={{ color: "grey" }}
                        align="right"
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Symbol
                      </TableCell>
                      <TableCell
                        style={{ color: "grey" }}
                        align="right"
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Name
                      </TableCell>
                      <TableCell
                        style={{ color: "grey" }}
                        align="right"
                        sx={{
                          "@media (max-width : 1000px)": {
                            fontSize: "10px",
                          },
                        }}
                      >
                        Price $
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.slice(5, 10).map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          border: "none",
                          cursor: "pointer",
                          "&:hover": {
                            // backgroundColor: "azure",
                          },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{ color: "#002244" }}
                        >
                          {row.rank}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "#002244", fontWeight: 1000 }}
                        >
                          {row.symbol}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "#002244", fontWeight: 1000 }}
                        >
                          <Button
                            variant="outlined"
                            sx={{
                              borderRadius: "15px",
                              fontWeight: 600,
                              color: "#002244",
                              "&:hover": {
                                backgroundColor: "#002244",
                                color: "white",
                              },
                            }}
                          >
                            {row.name}
                          </Button>
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{ color: "#002244", fontWeight: 600 }}
                        >
                          {row.price_usd}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className={CryptoMarketClass.cryptomarkettopdiv}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  color: "#002244",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  "@media (max-width : 1000px)": {
                    fontSize: "25px",
                  },
                }}
              >
                Crypto Market
              </Typography>
              <Typography
                variant="p"
                align="center"
                sx={{
                  marginTop: "10px",
                  marginBottom: "50px",
                  "@media (max-width : 1000px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Know Prices and Values
              </Typography>
            </ThemeProvider>
          </div>
          <div className={CryptoMarketClass.mobclass}>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {rows.map((a, i) => {
                return (
                  <List
                    key={i}
                    sx={{
                      marginTop: "10px",
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ListItem alignItems="center" sx={{ textAlign: "center" }}>
                      <ListItemText
                        sx={{ color: "#002244", fontWeight: 600 }}
                        primary={a.name}
                        secondary={
                          <Button
                            variant="outlined"
                            sx={{
                              border: "2px solid #002244",
                              borderRadius: "10px",
                              color: "black",
                            }}
                          >
                            {a.symbol}
                          </Button>
                        }
                      />
                    </ListItem>
                    <ListItem alignItems="center" sx={{ textAlign: "center" }}>
                      <Button variant="outlined">
                        <Typography>
                          {parseFloat(a.price_usd).toFixed(2)} USD
                        </Typography>
                      </Button>
                    </ListItem>
                  </List>
                );
              })}
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}

export default CryptoMarket;
