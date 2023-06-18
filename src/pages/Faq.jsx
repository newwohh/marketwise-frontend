import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar/SignInNavbar";
import { Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Faq() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      <SignInNavbar />
      <main>
        <section style={{ padding: "150px", textAlign: "center" }}>
          <div>
            <Typography variant="h1">FAQ's</Typography>
            <div style={{ marginTop: "150px" }}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                sx={{ height: "", marginBottom: "20px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                    About
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    What is Marketwise
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    MarketWise is a good option for investors who want to track
                    their investments and make informed trading decisions. It is
                    easy to use and offers a variety of features that can help
                    investors improve their trading performance.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
                sx={{ height: "", marginBottom: "20px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                    Feature
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    What is Heatmap
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    A heatmap for trading is a visual representation of the
                    order book for a particular security. It shows the number of
                    buy and sell orders at each price level. This information
                    can be used to identify areas of support and resistance, as
                    well as potential entry and exit points.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
                sx={{ height: "", marginBottom: "20px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                    Feature
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    What is Invest Simulator
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    An investment simulator is a software program that allows
                    users to practice investing without risking any real money.
                    It provides a virtual trading environment that mirrors the
                    real stock market, including real-time prices and news. This
                    allows users to test their investment strategies and learn
                    how to trade without the risk of losing money.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
                sx={{ height: "", marginBottom: "20px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                    Feature
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    What is Charts
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    User can track market with Charts that provide real data.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
                sx={{ height: "", marginBottom: "20px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                    Feature
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    What is Premium
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Where a user can get access to all the privileges given
                    Marketwise like unlimited tracking,unlimited
                    subscription,unlimited blogs.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
                sx={{ height: "", marginBottom: "20px" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  sx={{
                    padding: "10px",
                  }}
                >
                  <Typography variant="h5" sx={{ width: "33%", flexShrink: 0 }}>
                    Feature
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    What is Blogs
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    User can write blogs about their thoughts.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}

export default Faq;
