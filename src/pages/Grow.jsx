import React from "react";
import HeaderGrow from "../components/Grow/HeaderGrow";
import MainGrow from "../components/Grow/MainGrow";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { useScrollToTop } from "../actions/actions";
import { titleHandler } from "../handler/titleHandler";

function Grow() {
  useScrollToTop();
  titleHandler("Grow");
  return (
    <React.Fragment>
      <HeaderGrow />
      <MainGrow />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Grow;
