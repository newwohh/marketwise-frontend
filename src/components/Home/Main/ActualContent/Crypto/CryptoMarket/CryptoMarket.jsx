import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  ThemeProvider,
  Typography,
  useMediaQuery,
} from "@mui/material";
import useCryptoMarket from "../../../../../../styles/Home/CryptoMarketStyles";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { useTheme } from "@mui/material/styles";
import { getCryptoPrice } from "../../../../../../reducers/reducers";
import CryptoTable from "./CryptoTable";

function CryptoMarket() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const { prices } = useSelector((state) => state.marketwise);
  const CryptoMarketClass = useCryptoMarket;
  const dispatch = useDispatch();
  const dispatchCryptoPrice = React.useCallback(() => {
    dispatch(getCryptoPrice());
  }, [dispatch]);
  useEffect(() => {
    dispatchCryptoPrice();
  }, [dispatchCryptoPrice]);
  const rows = prices;

  return (
    <div style={CryptoMarketClass.cryptomarketcontainer}>
      {isMatch ? (
        <div>
          <div style={CryptoMarketClass.cryptomarkettopdiv}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  marginTop: "100px",
                  color: "#002244",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  "@media (max-width : 1000px)": {
                    fontSize: "25px",
                  },
                }}
              >
                Crypto Market
              </Typography>
              <Typography
                variant="p"
                align="center"
                sx={{
                  color: "#002244",
                  marginBottom: "100px",
                  "@media (max-width : 1000px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Know Prices and Values
              </Typography>
            </ThemeProvider>
          </div>
          <div style={CryptoMarketClass.cryptopricediv}>
            {[1, 2].map((el, i) => {
              return (
                <div
                  style={{
                    marginBottom: "50px",
                  }}
                >
                  <CryptoTable rows={rows} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div style={CryptoMarketClass.cryptomarkettopdiv}>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                align="center"
                sx={{
                  color: "#002244",
                  fontFamily: "Arial",
                  fontWeight: 600,
                  "@media (max-width : 1000px)": {
                    fontSize: "25px",
                  },
                }}
              >
                Crypto Market
              </Typography>
              <Typography
                variant="p"
                align="center"
                sx={{
                  marginTop: "10px",
                  marginBottom: "50px",
                  "@media (max-width : 1000px)": {
                    fontSize: "10px",
                  },
                }}
              >
                Know Prices and Values
              </Typography>
            </ThemeProvider>
          </div>
          <div style={CryptoMarketClass.mobclass}>
            <Container
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {rows.map((a, i) => {
                return (
                  <List
                    key={i}
                    sx={{
                      marginTop: "10px",
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <ListItem alignItems="center" sx={{ textAlign: "center" }}>
                      <ListItemText
                        sx={{ color: "#002244", fontWeight: 600 }}
                        primary={a.name}
                        secondary={
                          <Button
                            variant="outlined"
                            sx={{
                              border: "2px solid #002244",
                              borderRadius: "10px",
                              color: "black",
                            }}
                          >
                            {a.symbol}
                          </Button>
                        }
                      />
                    </ListItem>
                    <ListItem alignItems="center" sx={{ textAlign: "center" }}>
                      <Button variant="outlined">
                        <Typography>
                          {parseFloat(a.price_usd).toFixed(2)} USD
                        </Typography>
                      </Button>
                    </ListItem>
                  </List>
                );
              })}
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}

export default CryptoMarket;
