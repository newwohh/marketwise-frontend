import React, { useEffect } from "react";
import secureLocalStorage from "react-secure-storage";
import { MyContext } from "../context/Context";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import ChoosePlan from "../pages/ChoosePlan";
import Learn from "../pages/Learn";
import Grow from "../pages/Grow";
import Explore from "../pages/Explore";
import SecurityInfo from "../pages/SecurityInfo";
import About from "../pages/About";
import Overview from "../pages/Overview";
import Chart from "../pages/Chart";
import Heatmap from "../pages/Heatmap";
import Blogs from "../pages/Blogs";
import InvestSimulator from "../pages/InvestSimulator";
import Faq from "../pages/Faq";
import SignIn from "../pages/SignIn";
import ChatbotSupport from "../components/ChatSupport/Chatbot";
import { useSelector } from "react-redux";

function AppRoutes() {
  const [user, setUser] = React.useState();
  const { prices, news, stocknews, stockprice } = useSelector(
    (state) => state.marketwise
  );
  const cryptoPrice = prices;
  const cryptoNews = news;
  const stockPrice = stockprice;
  const stockNews = stocknews;

  useEffect(() => {
    setUser(JSON.parse(secureLocalStorage.getItem("user")));
  }, []);

  return (
    <MyContext.Provider value={{ user }}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="login" element={<SignIn />} />
        <Route path="/subscription" element={<ChoosePlan />} />
        <Route path="/education" element={<Learn />} />
        <Route path="/grow" element={<Grow />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/user_protection" element={<SecurityInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/cryptocurrency">
          <Route
            index
            element={<Overview crypto={cryptoPrice} cryptonews={cryptoNews} />}
          />
          <Route path="chart/:id" element={<Chart crypto={cryptoPrice} />} />
        </Route>
        <Route
          path="/stocks"
          element={<Overview stocks={stockPrice} stocknews={stockNews} />}
        />
        <Route
          path="/heatmap/cryptocurrency"
          element={<Heatmap cryptomap={cryptoPrice} />}
        />
        <Route path="/heatmap/stocks" element={<Heatmap stocks={"name"} />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/investsimulator" element={<InvestSimulator />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/chat" element={<ChatbotSupport />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default AppRoutes;
