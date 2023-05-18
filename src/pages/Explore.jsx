import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import ContentExplore from "../components/Explore/ContentExplore/ContentExplore";
import FooterLearn from "../components/Learn/Footer/FooterLearn";

function Explore() {
  return (
    <React.Fragment>
      <NavBar />
      <ContentExplore />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Explore;
