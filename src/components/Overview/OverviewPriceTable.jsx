import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext, useRef } from "react";
import { MyContext } from "../../context/Context";
import { subscribeNew } from "../../api";

function OverviewPriceTable(props) {
  const { user } = useContext(MyContext);
  const nameref = useRef(0);

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#F0F8FF",
        "@media (max-width:1000px)": {
          width: "300px",
        },
      }}
    >
      <Table
        sx={{
          backgroundColor: "#F0F8FF",
          "@media (max-width:1000px)": {
            width: "300px",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">
              {props.title === "Crypto" ? "Rank" : "Asset"}
            </TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">
              {" "}
              {props.title === "Crypto" ? "Symbol" : "Type"}
            </TableCell>
            <TableCell align="right">tab</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.prices.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:hover": {
                  backgroundColor: "#E1EBEE",
                },
              }}
            >
              <TableCell>
                <Button
                  ref={nameref}
                  href={`cryptocurrency/chart/${row.symbol}`}
                  variant="outlined"
                  sx={{
                    borderColor: "#002244",
                    borderRadius: "15px",
                    width: "150px",
                    color: "#002244",
                    "&:hover": {
                      backgroundColor: "#002244",
                      color: "white",
                      borderColor: "#002244",
                    },
                    "@media (max-width:1000px)": {
                      height: "50px",
                      fontSize: 10,
                      overflow: "auto",
                    },
                  }}
                >
                  {row.name}
                </Button>
              </TableCell>
              <TableCell component="th" scope="row" align="right">
                {row.rank ? row.rank : "Stocks"}
              </TableCell>
              <TableCell align="right">
                {row.price ? row.price : row.price_usd}
              </TableCell>
              <TableCell align="right">
                <Button
                  href={`cryptocurrency/chart/${row.symbol}`}
                  target="_blank"
                  sx={{
                    borderColor: "#002244",
                    width: "150px",
                    color: "#002244",
                  }}
                >
                  {row.type ? row.type : row.symbol}
                </Button>
              </TableCell>
              <TableCell align="right">
                <Button
                  sx={{
                    borderColor: "#002244",
                    borderRadius: "15px",
                    width: "150px",
                    color: "#002244",
                    "&:hover": {
                      backgroundColor: "#002244",
                      color: "white",
                      borderColor: "#002244",
                    },
                  }}
                  onClick={() =>
                    subscribeNew(
                      "market",
                      row.name,
                      user,
                      row.price || row.price_usd
                    )
                  }
                >
                  Subscribe
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OverviewPriceTable;
