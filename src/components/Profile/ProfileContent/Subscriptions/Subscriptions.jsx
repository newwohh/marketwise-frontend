import React from "react";
import { Divider, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Subscriptions() {
  return (
    <div>
      <div>
        <Typography variant="h3">Subscriptions</Typography>
        <Divider />
      </div>
      <div>
        <TableContainer
          component={Paper}
          sx={{ width: "1500px", marginTop: "50px" }}
        >
          <Table sx={{ width: "1500px" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Symbol/Ticker</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Currency</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {/* {rows.map((row) => ( */}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  No Subscription
                </TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
              {/* ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Subscriptions;
