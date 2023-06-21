import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Grow from "./pages/Grow";
import Explore from "./pages/Explore";
import Chart from "./pages/Chart";
import SecurityInfo from "./pages/SecurityInfo";
import About from "./pages/About";
import { useLocation } from "react-router-dom";
import Overview from "./pages/Overview";
import { useSelector } from "react-redux";
import Heatmap from "./pages/Heatmap";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import InvestSimulator from "./pages/InvestSimulator";
import ChoosePlan from "./pages/ChoosePlan";
import Faq from "./pages/Faq";
import secureLocalStorage from "react-secure-storage";
import { MyContext } from "./context/Context";
import ProfileUI from "./components/Profile/ProfileContent/ProfileUI/ProfileUI";

function App() {
  const [user, setUser] = React.useState("");
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  };
  const { prices, news, stocknews, stockprice } = useSelector(
    (state) => state.news
  );
  const cryptoPrice = prices;
  const cryptoNews = news;
  const stockPrice = stockprice;
  const stockNews = stocknews;
  // console.log(news, prices, stockPrice, stockNews);

  useEffect(() => {
    setUser(JSON.parse(secureLocalStorage.getItem("user")));
  }, []);

  return (
    <React.Fragment>
      <ScrollToTop />
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
              element={
                <Overview crypto={cryptoPrice} cryptonews={cryptoNews} />
              }
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
        </Routes>
      </MyContext.Provider>
    </React.Fragment>
  );
}

export default App;
