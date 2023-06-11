import React from "react";
import SigninNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import { Autocomplete, Typography, TextField, Button } from "@mui/material";
import { useSelector } from "react-redux";

function InvestSimulator() {
  const [data, setData] = React.useState("");
  const dataRef = React.useRef();
  const { prices } = useSelector((state) => state.news);
  console.log(prices);
  return (
    <React.Fragment>
      <SigninNavbar />
      <main>
        <section style={{ marginTop: "150px", marginLeft: "150px" }}>
          <div>
            <Typography variant="h2">Invest Simulator</Typography>
            <Typography variant="h6">Description</Typography>
          </div>
        </section>
        <section style={{ marginLeft: "150px", marginTop: "50px" }}>
          <Autocomplete
            disablePortal
            options={prices}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Choose a Ticker" />
            )}
          />
          <div style={{ height: "400px", width: "800px" }}></div>
          <div
            style={{
              display: " flex",
              flexDirection: "column",
              width: "600px",
            }}
          >
            <div style={{ display: "flex" }}>
              <TextField
                ref={dataRef}
                value={data}
                onChange={(event) => {
                  setData(event.target.value);
                }}
                sx={{ width: "300px", marginRight: "30px" }}
              />
              <TextField
                ref={dataRef}
                value={data}
                onChange={(event) => {
                  setData(event.target.value);
                }}
                sx={{ width: "300px" }}
              />
            </div>
            <Button onClick={() => console.log(data)}>Click</Button>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default InvestSimulator;
