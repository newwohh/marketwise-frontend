import React from "react";
import HeaderLearn from "../components/Learn/HeaderLearn/HeaderLearn";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import ContentAbout from "../components/About/ContentAbout";
function About() {
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
