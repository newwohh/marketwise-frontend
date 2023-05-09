import React from "react";
import NavBar from "../components/Home/Header/NavBar/NavBar";
import HeroSection from "../components/Home/Header/HeroSection/HeroSection";
import Main from "../components/Home/Main/Main";
import Footer from "../components/Home/Footer/Footer";

function Home() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
        <HeroSection />
      </header>
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default Home;
