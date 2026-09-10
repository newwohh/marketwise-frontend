import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockNews } from "../../../../../../reducers/reducers";
import { CircularProgress, ThemeProvider, Typography } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import useStockNews from "../../../../../../styles/Home/StockNewsStyle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { Link } from "react-router-dom";
import StockNewsCard from "./StockNewsCard";

function StockNews() {
  const StockNewsClasses = useStockNews;
  const dispatch = useDispatch();
  const { stocknews } = useSelector((state) => state.marketwise);
  const getProducts = React.useCallback(() => {
    dispatch(getStockNews());
  }, [dispatch]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  let stockNews = stocknews;
  return (
    <div style={StockNewsClasses.containerdiv}>
      <div style={StockNewsClasses.newsdiv}>
        <div>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h2"
              sx={{
                "&:hover": {
                  color: "#002244",
                },
                "@media (max-width: 1000px)": {
                  fontSize: "25px",
                },
              }}
            >
              <Link to="/stocks" style={StockNewsClasses.titlelink}>
                Stocks
                <ArrowForwardIosIcon
                  sx={{
                    marginLeft: "10px",
                    "@media (max-width: 1000px)": {
                      height: "12px",
                      marginLeft: "0px",
                    },
                  }}
                />
              </Link>
            </Typography>
            <Typography variant="p" sx={{ color: "#002244" }}>
              What's Hot in Stock Market
            </Typography>
          </ThemeProvider>
        </div>
      </div>
      <div style={StockNewsClasses.newscontent}>
        <Swiper
          modules={[A11y, Navigation, Autoplay]}
          navigation
          rewind
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{ delay: 7000, pauseOnMouseEnter: true }}
          breakpoints={{ 801: { slidesPerView: 3, autoplay: { enabled: false } } }}
          style={{ height: "600px", marginInline: "min(100px, 5vw)" }}
        >
          {stocknews === undefined || stocknews === [] ? (
            <CircularProgress />
          ) : (
            stockNews.map((el, i) => {
              return (
                <SwiperSlide key={i}>
                  <StockNewsCard el={el} i={i} />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default StockNews;
