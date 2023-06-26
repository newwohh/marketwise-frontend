import React from "react";
import HeaderGrow from "../components/Grow/HeaderGrow";
import MainGrow from "../components/Grow/MainGrow";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { useLocation } from "react-router-dom";

function Grow() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <HeaderGrow />
      <MainGrow />
      <FooterLearn />
    </React.Fragment>
  );
}

export default Grow;
