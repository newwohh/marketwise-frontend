import React from "react";
import HeaderGrow from "../components/Grow/HeaderGrow";
import MainGrow from "../components/Grow/MainGrow";
import FooterLearn from "../components/Learn/Footer/FooterLearn";

function Grow() {
  return (
    <React.Fragment>
      <HeaderGrow />
      <MainGrow />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Grow;
