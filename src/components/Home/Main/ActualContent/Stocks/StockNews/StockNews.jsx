import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockNews } from "../../../../../../store/store-actions";
import { CircularProgress, ThemeProvider, Typography } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import useStockNews from "../../../../../../styles/Home/StockNewsStyle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "better-react-carousel";
import { Link } from "react-router-dom";
import StockNewsCard from "./StockNewsCard";

function StockNews() {
  const StockNewsClasses = useStockNews;
  const dispatch = useDispatch();
  const { stocknews } = useSelector((state) => state.news);
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
        <Carousel
          cols={3}
          rows={1}
          gap={10}
          loop
          responsiveLayout={[
            {
              breakpoint: 800,
              cols: 1,
              rows: 1,
              gap: 220,
              loop: true,
              autoplay: 7000,
            },
          ]}
          containerStyle={{
            height: "500px",
            marginLeft: "100px",
            marginRight: "100px",
          }}
        >
          {stocknews === undefined || stocknews === [] ? (
            <CircularProgress />
          ) : (
            stockNews.map((el, i) => {
              return (
                <Carousel.Item key={i}>
                  <StockNewsCard el={el} i={i} />
                </Carousel.Item>
              );
            })
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default StockNews;
