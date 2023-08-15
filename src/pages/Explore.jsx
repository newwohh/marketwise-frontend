import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import ContentExplore from "../components/Explore/ContentExplore";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { titleHandler } from "../handler/titleHandler";
import { useScrollToTop } from "../actions/actions";

function Explore() {
  useScrollToTop();
  titleHandler("Explore");

  return (
    <React.Fragment>
      <NavBar />
      <ContentExplore />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Explore;
