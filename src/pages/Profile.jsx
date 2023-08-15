import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import ProfileUI from "../components/Profile/ProfileUI/ProfileUI";
import Subscriptions from "../components/Profile/Subscriptions/Subscriptions";
import WriteBlogs from "../components/Profile/WriteBlogs/WriteBlogs";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { titleHandler } from "../handler/titleHandler";
import { TabPanel, useScrollToTop } from "../actions/actions";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Profile() {
  titleHandler("Profile");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useScrollToTop();
  return (
    <React.Fragment>
      <SignInNavbar />
      <main style={{ height: "1000px", backgroundColor: "#F0F8FF" }}>
        <section>
          <div style={{}}>
            <Box
              sx={{
                display: "flex",
                flexDirection: isMatch ? "row" : "column",
              }}
            >
              <List>
                <Tabs
                  textColor="secondary"
                  indicatorColor="secondary"
                  orientation={isMatch ? "vertical" : "horizontal"}
                  value={value}
                  onChange={handleChange}
                  sx={{
                    marginTop: "150px",
                    marginLeft: "150px",
                    "@media (max-width:1000px)": {
                      marginLeft: "0px",
                    },
                  }}
                >
                  <Tab label="About" />
                  <Tab label="Subscriptons" />
                  <Tab label="Write Blog" />
                </Tabs>
              </List>
              <Box component="main" sx={{ flexGrow: 1, marginTop: "150px" }}>
                <TabPanel value={value} index={0}>
                  <ProfileUI />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Subscriptions />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <WriteBlogs />
                </TabPanel>
              </Box>
            </Box>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
