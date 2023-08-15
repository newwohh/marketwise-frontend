import React from "react";
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Box,
} from "@mui/material";
import useInvestSimulatorStyles from "../../styles/InvestSimulator/InvestSimulator";
import { investSimulatorCalcHandler } from "../../actions/actions";

function InvestSimulatorCalc(props) {
  const InvestSimulatorClass = useInvestSimulatorStyles;
  const [change, setChange] = React.useState(0);
  const [year, setYears] = React.useState("");
  const [quantity, setQuantity] = React.useState();
  const calculateAmountForSimulation = (price, change, durationInYear) => {
    return setChange(investSimulatorCalcHandler(price, change, durationInYear));
  };

  return (
    <Box
      sx={{
        display: "flex",
        "@media (max-width:1000px)": {
          flexDirection: "column",
        },
      }}
    >
      <div>
        <Box sx={InvestSimulatorClass.detailsdiv}>
          <Typography variant="h2" sx={{ marginBottom: "50px" }}>
            {props.data.symbol}
          </Typography>
          <Typography variant="h3">{props.data.name}</Typography>
          <Typography variant="h4">${props.data.price}</Typography>
        </Box>
        <div style={InvestSimulatorClass.calcdiv}>
          <div>
            <div style={{ display: "flex" }}>
              <TextField
                label="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                sx={{
                  width: "300px",
                  marginRight: "30px",
                  "@media (max-width:1000px)": {
                    width: "150px",
                  },
                }}
              />
              <FormControl
                fullWidth
                sx={{
                  "@media (max-width:1000px)": {
                    width: "150px",
                  },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  disabled
                  value={props.data.price}
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
                "@media (max-width:1000px)": {
                  width: "350px",
                },
              }}
            />
          </div>
          <Button
            onClick={() =>
              calculateAmountForSimulation(
                props.data.price,
                props.data.change,
                quantity
              )
            }
            sx={{
              width: "600px",
              height: "60px",
              backgroundColor: "#002244",
              color: "white",
              "@media (max-width:1000px)": {
                width: "350px",
              },
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
        <Box sx={InvestSimulatorClass.detailsdivtwo}>
          <Typography variant="h1">${change}</Typography>
        </Box>
      </div>
    </Box>
  );
}

export default InvestSimulatorCalc;
