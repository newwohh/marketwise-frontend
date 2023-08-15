import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Divider, Typography, useMediaQuery } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { backendBaseUrl } from "../../../../constants/constants";
import { MyContext } from "../../../../context/Context";
import { useTheme } from "@mui/material/styles";

function Subscriptions() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const stocks = useSelector((state) => state.news.stockprice);
  console.log(stocks);
  const [allSubs, setAllSubs] = React.useState([]);
  const { user } = useContext(MyContext);
  const allSubscrptions = async () => {
    try {
      const request = await fetch(
        backendBaseUrl + "api/v1/subscrptions/getsubscription/" + user.user._id,
        {
          credentials: "include",
        }
      );
      const response = await request.json();
      console.log(response);

      if (response.status === "success") setAllSubs(response.data);
    } catch (error) {
      console.log(error);
    }
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
                <TableCell component="th" scope="row">
                  No Subscription
                </TableCell>
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
