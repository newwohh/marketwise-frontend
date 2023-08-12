import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import List from "@mui/material/List";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignInNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import ProfileUI from "../components/Profile/ProfileContent/ProfileUI/ProfileUI";
import Subscriptions from "../components/Profile/ProfileContent/Subscriptions/Subscriptions";
import WriteBlogs from "../components/Profile/ProfileContent/WriteBlogs/WriteBlogs";
import { useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Profile() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
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
