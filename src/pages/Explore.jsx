import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import ContentExplore from "../components/Explore/ContentExplore/ContentExplore";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { useLocation } from "react-router-dom";

function Explore() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <NavBar />
      <ContentExplore />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Explore;
