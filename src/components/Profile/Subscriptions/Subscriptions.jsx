import React, { useContext, useEffect } from "react";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { MyContext } from "../../../context/Context";
import { useTheme } from "@mui/material/styles";
import { getAllSubscriptions } from "../../../api";

function Subscriptions() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const [allSubs, setAllSubs] = React.useState([]);
  const { user } = useContext(MyContext);
  const allSubscrptions = async () => {
    let subMapArr = await getAllSubscriptions(user);
    setAllSubs(subMapArr);
  };
  useEffect(() => {
    allSubscrptions();
  }, []);

  return (
    <div>
      <div>
        <Typography variant="h3">Subscriptions</Typography>
        <Divider />
      </div>
      <div>
        <TableContainer
          component={Paper}
          sx={{
            width: isMatch ? "1500px" : "300px",
            height: "500px",
            marginTop: isMatch ? "50px" : "10px",
          }}
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
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {allSubs.map((el, i) => {
                  return <TableCell align="right">{el.name}</TableCell>;
                })}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Subscriptions;
