import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import FaqAccordion from "../components/Fag/FaqAccordion";
import { faqAccordionData } from "../dev-data/data";

function Faq() {
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
      <main>
        <Box
          sx={{
            padding: { xl: "150px", xs: 0 },
            marginTop: { xs: 10 },
            textAlign: "center",
          }}
        >
          <div>
            <Typography variant="h1" sx={{ fontSize: { xs: 30 } }}>
              FAQ's
            </Typography>
            <div style={{ marginTop: "150px" }}>
              {faqAccordionData.map((el, i) => {
                return <FaqAccordion el={el} key={i} />;
              })}
            </div>
          </div>
        </Box>
      </main>
    </React.Fragment>
  );
}

export default Faq;
