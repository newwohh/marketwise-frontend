import { useTheme } from "@emotion/react";
import {
  Box,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStockMarketPrices from "../../../../../../styles/Home/StockMarketPricesStyles";

function StockMarketTable(props) {
  const themes = useTheme();
  const loaderArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const StockPriceClasses = useStockMarketPrices;
  //   const exchanges =
  //     props.price === undefined ||
  //     props.price === [] ||
  //     props.price[1] === undefined
  //       ?
  //       : props.price[1].results;

  let price = props.price === undefined ? [{ name: "sorry" }] : props.price;
  console.log(price);
  // const setPrice = (props) => {
  //   if (
  //     props.price === undefined ||
  //     props.price === [] ||
  //     props.price[1] === undefined
  //   ) {
  //     price = [{ name: "sorry" }];
  //   } else if (props.tab === "stocks") {
  //     price = props.price[0]?.results?.slice(0, 20);
  //   } else if (props.tab === "dividents") {
  //     price = props.price[2].results;
  //   }
  // };

  // setPrice(props);

  return (
    <TableContainer
      component={Paper}
      sx={{
        height: 500,
        width: 1500,
        color: "white",
        backgroundColor: "#F0F8FF",
        "@media (max-width: 1000px)": {
          width: "300px",
          height: "500px",
        },
      }}
      value={props.value}
      index={0}
      dir={themes.direction}
    >
      <Table
        sx={{
          width: 1500,
          color: "white",
          "@media (max-width: 1000px)": {
            width: "300px",
            height: "500px",
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
        <TableBody
          sx={{
            "@media (max-width: 1000px)": {
              height: "400px",
            },
          }}
        >
          {/* {price === undefined || props.stockprice === []
            ? loaderArray.map((el, i) => {
                return (
                  <Box sx={{ pt: 0.5 }} key={i}>
                    <Skeleton variant="rectangular" width={450} height={30} />
                    <Skeleton variant="circular" />
                    <Skeleton variant="rectangular" width={100} />
                  </Box>
                );
              })
            : price.map((row, i) => (
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
                    <Tooltip title={row.name ? row.name : "Data not found!"}>
                      <Link
                        style={StockPriceClasses.exchangesLink}
                        to={row.url || ""}
                      >
                        {row.name ? row.name : "Data not found!"}
                      </Link>
                    </Tooltip>
                  </TableCell>
                  {price.map((el, i) => {
                    return (
                      <TableCell align="right" sx={{ color: "#002244" }}>
                        <Typography variant="p" sx={{ fontWeight: 600 }}>
                          {el === undefined ? "Data not found!" : el}
                        </Typography>
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default StockMarketTable;
