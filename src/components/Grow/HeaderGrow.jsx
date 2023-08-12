import React from "react";
import { AppBar, Button, Toolbar, useMediaQuery } from "@mui/material";
import logo from "../../assets/profit(1).png";
import useHeaderGrowStyles from "../../styles/Grow/HeaderGrowStyles";

import { useTheme } from "@mui/material/styles";
import GrowMobileHeader from "./GrowMobileHeader";

function HeaderGrow() {
  const HeaderGrowClass = useHeaderGrowStyles;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <header>
      {isMatch ? (
        <AppBar
          sx={{
            backgroundColor: "hsla(0, 0%, 0%, 0)",
            border: 0,
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{
              backgroundColor: "hsla(0, 0%, 0%, 0)",
              border: "none",
              height: "80px",
              boxShadow: "none",
            }}
          >
            <div style={HeaderGrowClass.navbargrow}>
              <div style={HeaderGrowClass.headersubdiv}>
                <img
                  src={logo}
                  alt="logoingrow"
                  style={HeaderGrowClass.logogrow}
                />
              </div>
              <div style={HeaderGrowClass.headersubdiv}>
                <Button href="/login" sx={{ color: "white" }}>
                  Log in
                </Button>
                <Button sx={{ color: "white", marginLeft: "30px" }}>
                  Products
                </Button>
              </div>
              <div style={HeaderGrowClass.headersubdiv}>
                <Button
                  sx={{
                    color: "white",
                    width: "200px",
                    borderRadius: "15px",
                    border: "1px solid white",
                    marginLeft: "35px",
                  }}
                >
                  Register
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <GrowMobileHeader />
      )}
    </header>
  );
}

export default HeaderGrow;
