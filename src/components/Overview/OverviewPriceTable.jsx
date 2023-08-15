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
import { backendBaseUrl } from "../../constants/constants";
import { MyContext } from "../../context/Context";

function OverviewPriceTable(props) {
  const { user } = useContext(MyContext);
  const nameref = useRef(0);
  const subscribeNew = async (name) => {
    try {
      const request = await fetch(
        backendBaseUrl + "api/v1/subscrptions/newsubscription",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            market: "name",
            name: name,
            user: user.user._id,
          }),
          credentials: "include",
        }
      );
      const response = await request.json();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
                {row.market ? row.market : row.rank}
              </TableCell>
              <TableCell align="right">
                {row.ticker ? row.ticker : row.price_usd}
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
                  onClick={() => subscribeNew(row.name)}
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
