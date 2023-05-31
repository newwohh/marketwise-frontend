import React, { useContext } from "react";
import HeaderLearn from "../components/Learn/HeaderLearn/HeaderLearn";
import ContentLearn from "../components/Learn/ContentLearn/ContentLearn";
import FooterLearn from "../components/Learn/Footer/FooterLearn";

function Learn() {
  return (
    <React.Fragment>
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
