import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import CrpytoPriceTable from "./CrpytoPriceTable";

const tableHeading = ["Rank", "Symbol", "Name", "Price $"];

function CryptoTable(props) {
  return (
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
            {tableHeading.map((el, i) => {
              return (
                <TableCell
                  key={i}
                  style={{ color: "grey" }}
                  sx={{
                    "@media (max-width : 1000px)": {
                      fontSize: "10px",
                    },
                  }}
                >
                  {el}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.slice(0, 5).map((row, i) => (
            <CrpytoPriceTable
              rank={row.rank}
              symbol={row.symbol}
              name={row.name}
              price={row.price_usd}
              i={i}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CryptoTable;
