import React from "react";
import SigninNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import {
  Autocomplete,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { useSelector } from "react-redux";
import useInvestSimulatorStyles from "../styles/InvestSimulator/InvestSimulator";

function InvestSimulator() {
  const InvestSimulatorClass = useInvestSimulatorStyles();
  const [change, setChange] = React.useState(0);
  const [year, setYears] = React.useState("");
  const [quantity, setQuantity] = React.useState();
  const [data, setData] = React.useState("");
  const { prices } = useSelector((state) => state.news);
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

  const calculateAmountForSimulation = (price, change, durationInYear) => {
    let priceOfTickerParsed = parseFloat(price);
    let changeOfTickerParsed = parseFloat(change);
    let percentageOfChange = (priceOfTickerParsed * changeOfTickerParsed) / 100;
    if (priceOfTickerParsed > 0) {
      return setChange(
        (priceOfTickerParsed + percentageOfChange) * durationInYear
      );
    }
    if (priceOfTickerParsed < 0) {
      return setChange(priceOfTickerParsed - percentageOfChange);
    }
  };
  return (
    <React.Fragment>
      <SigninNavbar />
      <main style={{ backgroundColor: "#F0F8FF" }}>
        <section style={{ marginTop: "90px", marginLeft: "150px" }}>
          <div>
            <Typography variant="h2" sx={{ fontFamily: "Sans" }}>
              Invest Simulator
            </Typography>
            <Typography variant="h6">
              An investment simulator is a software program that allows users to
              practice investing without risking any real money. It does this by
              giving users a virtual balance of money to invest, which they can
              then use to buy and sell stocks, bonds, and other financial
              instruments.
            </Typography>
          </div>
        </section>
        <section style={{ marginLeft: "150px", marginTop: "50px" }}>
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
          <div style={{ display: "flex" }}>
            <div>
              <div className={InvestSimulatorClass.detailsdiv}>
                <Typography variant="h2" sx={{ marginBottom: "50px" }}>
                  {data.symbol}
                </Typography>
                <Typography variant="h3">{data.name}</Typography>
                <Typography variant="h4">${data.price}</Typography>
              </div>
              <div className={InvestSimulatorClass.calcdiv}>
                <div>
                  <div style={{ display: "flex" }}>
                    <TextField
                      label="Quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      sx={{ width: "300px", marginRight: "30px" }}
                    />
                    <FormControl fullWidth>
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        disabled
                        value={data.price}
                        id="outlined-adornment-amount"
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        label="Amount"
                      />
                    </FormControl>
                  </div>
                  <TextField
                    label="Years"
                    value={year}
                    onChange={(e) => setYears(e.target.value)}
                    sx={{
                      width: "600px",
                      marginTop: "20px",
                      marginBottom: "30px",
                    }}
                  />
                </div>
                <Button
                  onClick={() =>
                    calculateAmountForSimulation(
                      data.price,
                      data.change,
                      quantity
                    )
                  }
                  sx={{
                    width: "600px",
                    height: "60px",
                    backgroundColor: "#002244",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#002233",
                    },
                  }}
                >
                  Check
                </Button>
              </div>
            </div>
            <div>
              <div className={InvestSimulatorClass.detailsdivtwo}>
                <Typography variant="h1">${change}</Typography>
              </div>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default InvestSimulator;
