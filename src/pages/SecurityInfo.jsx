import React from "react";
import SecurityInfoContent from "../components/SecurityInfo/SecurityInfoContent";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import FooterLearn from "../components/Learn/Footer/FooterLearn";

function SecurityInfo() {
  return (
    <React.Fragment>
      <NavBar />
      <SecurityInfoContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default SecurityInfo;
