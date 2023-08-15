import React from "react";
import SecurityInfoContent from "../components/SecurityInfo/SecurityInfoContent";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import SecurityInfoNavbar from "../components/SecurityInfo/SecurityInfoContent/SecurityInfoNavbar";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function SecurityInfo() {
  useScrollToTop();
  titleHandler("User Protection");
  return (
    <React.Fragment>
      <SecurityInfoNavbar />
      <SecurityInfoContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default SecurityInfo;
