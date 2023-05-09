import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoPrice } from "../../../../../../store/store-actions";
import { Button, ThemeProvider, Typography } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import useCryptoMarket from "../../../../../../styles/CryptoMarketStyles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function CryptoMarket() {
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
      <div className={CryptoMarketClass.cryptomarkettopdiv}>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h2"
            align="center"
            sx={{ color: "#002244", fontFamily: "Arial", fontWeight: 600 }}
          >
            Crypto Market
          </Typography>
          <Typography variant="p" align="center">
            Know Prices and Values
          </Typography>
        </ThemeProvider>
      </div>
      <div className={CryptoMarketClass.cryptopricediv}>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ width: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "grey" }}>Rank</TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
                    Symbol
                  </TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
                    Name
                  </TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
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
                        backgroundColor: "azure",
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rank}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "blue", fontWeight: 1000 }}
                    >
                      {row.symbol}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "black", fontWeight: 1000 }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "15px",
                          fontWeight: 600,
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
          <TableContainer component={Paper}>
            <Table sx={{ width: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: "grey" }}>Rank</TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
                    Symbol
                  </TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
                    Name
                  </TableCell>
                  <TableCell style={{ color: "grey" }} align="right">
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
                        backgroundColor: "azure",
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {row.rank}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "blue", fontWeight: 1000 }}
                    >
                      {row.symbol}
                    </TableCell>
                    <TableCell
                      align="right"
                      sx={{ color: "black", fontWeight: 1000 }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          borderRadius: "15px",
                          fontWeight: 600,
                          "&:hover": {
                            backgroundColor: "blue",
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
  );
}

export default CryptoMarket;
