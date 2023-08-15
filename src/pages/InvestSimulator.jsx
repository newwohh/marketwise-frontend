import React from "react";
import SigninNavbar from "../components/SignIn/SignInNavBar";
import { Autocomplete, Typography, TextField, Box } from "@mui/material";
import { useSelector } from "react-redux";
import InvestSimulatorCalc from "../components/InvestSimulator/InvestSimulatorCalc";

function InvestSimulator() {
  const [data, setData] = React.useState("");
  const { prices } = useSelector((state) => state.marketwise);
  const getData = (name) => {
    if (name === "" || !name) {
      return;
    } else {
      const dataOfSelectedTicker = prices.find((ticker) => {
        if (ticker.name === name) return ticker;
      });
      let updatedData = {
        price: dataOfSelectedTicker.price_usd,
        name: dataOfSelectedTicker.name,
        symbol: dataOfSelectedTicker.symbol,
        change: dataOfSelectedTicker.percent_change_7d,
      };
      console.log(dataOfSelectedTicker);
      return setData((data) => ({ ...data, ...updatedData }));
    }
  };

  return (
    <React.Fragment>
      <SigninNavbar />
      <main style={{ backgroundColor: "#F0F8FF" }}>
        <Box
          sx={{
            marginTop: "90px",
            marginLeft: "150px",
            "@media (max-width:1000px)": {
              marginLeft: "10px",
              marginTop: "0px",
            },
          }}
        >
          <Box
            sx={{
              "@media (max-width:1000px)": {
                paddingTop: "80px",
              },
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Sans",
                "@media (max-width:1000px)": {
                  fontSize: "30px",
                  paddingBottom: 2,
                },
              }}
            >
              Invest Simulator
            </Typography>
            <Typography variant="h6">
              An investment simulator is a software program that allows users to
              practice investing without risking any real money. It does this by
              giving users a virtual balance of money to invest, which they can
              then use to buy and sell stocks, bonds, and other financial
              instruments.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginLeft: "150px",
            marginTop: "50px",
            "@media (max-width:1000px)": {
              marginLeft: 0,
            },
          }}
        >
          <Autocomplete
            disablePortal
            options={prices}
            onInputChange={(e, newValue) => {
              getData(newValue);
            }}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose a Ticker" />
            )}
          />
          <InvestSimulatorCalc data={data} />
        </Box>
      </main>
    </React.Fragment>
  );
}

export default InvestSimulator;
