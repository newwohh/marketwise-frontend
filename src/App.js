import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Explore from "./pages/Explore";
import SecurityInfo from "./pages/SecurityInfo";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Learn />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/user_protecttion" element={<SecurityInfo />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
