import React from "react";
import SignInNavbar from "../components/SignIn/SignInNavBar";
import { Box, Typography } from "@mui/material";
import FaqAccordion from "../components/Faq/FaqAccordion";
import { faqAccordionData } from "../dev-data/data";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Faq() {
  useScrollToTop();
  titleHandler("FAQ's");

  return (
    <React.Fragment>
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
