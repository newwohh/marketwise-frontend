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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Profile() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <SignInNavbar />
      <main style={{ height: "1000px", backgroundColor: "#F0F8FF" }}>
        <section>
          <div style={{}}>
            <Box sx={{ display: "flex" }}>
              <List>
                <Tabs
                  textColor="secondary"
                  indicatorColor="secondary"
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  aria-label="vertical tabs example"
                  sx={{ marginTop: "150px", marginLeft: "150px" }}
                >
                  <Tab label="About" {...a11yProps(0)} />
                  <Tab label="Subscriptons" {...a11yProps(1)} />
                  <Tab label="Write Blog" {...a11yProps(2)} />
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
