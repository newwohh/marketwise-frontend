import React from "react";
import SecurityInfoContent from "../components/SecurityInfo/SecurityInfoContent";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import SecurityInfoNavbar from "../components/SecurityInfo/SecurityInfoContent/SecurityInfoNavbar";

function SecurityInfo() {
  return (
    <React.Fragment>
      <SecurityInfoNavbar />
      <SecurityInfoContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default SecurityInfo;
