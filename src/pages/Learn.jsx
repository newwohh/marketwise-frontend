import React from "react";
import HeaderLearn from "../components/Learn/HeaderLearn/HeaderLearn";
import ContentLearn from "../components/Learn/ContentLearn/ContentLearn";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import { useLocation } from "react-router-dom";

function Learn() {
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
      <main>
        <ContentLearn />
      </main>
      <FooterLearn />
    </React.Fragment>
  );
}

export default Learn;
