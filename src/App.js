import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Explore from "./pages/Explore";
import SecurityInfo from "./pages/SecurityInfo";
import About from "./pages/About";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Learn />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/user_protection" element={<SecurityInfo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
