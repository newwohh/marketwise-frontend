import React from "react";
import HeaderLearn from "../components/Learn/HeaderLearn/HeaderLearn";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import ContentAbout from "../components/About/ContentAbout";
import { useLocation } from "react-router-dom";
function About() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <header>
        <HeaderLearn />
      </header>
      <ContentAbout />
      <FooterLearn />
    </React.Fragment>
  );
}

export default About;
