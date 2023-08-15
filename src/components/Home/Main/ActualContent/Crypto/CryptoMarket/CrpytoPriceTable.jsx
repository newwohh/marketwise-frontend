import React from "react";
import { Button, TableCell, TableRow } from "@mui/material";

function CrpytoPriceTable(props) {
  return (
    <TableRow
      key={props.i}
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
      <TableCell component="th" scope="row" sx={{ color: "#002244" }}>
        {props.rank}
      </TableCell>
      <TableCell align="right" sx={{ color: "#002244", fontWeight: 1000 }}>
        {props.symbol}
      </TableCell>
      <TableCell align="right" sx={{ color: "#002244", fontWeight: 1000 }}>
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
          {props.name}
        </Button>
      </TableCell>
      <TableCell align="right" sx={{ color: "#002244", fontWeight: 600 }}>
        {props.price}
      </TableCell>
    </TableRow>
  );
}

export default CrpytoPriceTable;
