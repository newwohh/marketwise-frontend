import React from "react";
import HeaderLearn from "../components/Learn/HeaderLearn/HeaderLearn";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import ContentAbout from "../components/About/ContentAbout";
import { useLocation } from "react-router-dom";
import { useScrollToTop } from "../actions/actions";
function About() {
  useScrollToTop();
  return (
    <React.Fragment>
      <header>
        <HeaderLearn />
      </header>
      <ContentAbout />
      <FooterLearn />
    </React.Fragment>
  );
}

export default About;
