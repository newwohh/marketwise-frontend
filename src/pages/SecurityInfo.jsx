import React from "react";
import SecurityInfoContent from "../components/SecurityInfo/SecurityInfoContent";
import FooterLearn from "../components/Learn/Footer/FooterLearn";
import SecurityInfoNavbar from "../components/SecurityInfo/SecurityInfoContent/SecurityInfoNavbar";
import { useLocation } from "react-router-dom";

function SecurityInfo() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };

  return (
    <React.Fragment>
      <ScrollToTop />
      <SecurityInfoNavbar />
      <SecurityInfoContent />
      <FooterLearn />
    </React.Fragment>
  );
}

export default SecurityInfo;
