import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockNews } from "../../../../../../store/store-actions";
import { ThemeProvider, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import useStockNews from "../../../../../../styles/StockNewsStyle";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "better-react-carousel";
import { Fade } from "react-reveal";

function StockNews() {
  const StockNewsClasses = useStockNews();
  const dispatch = useDispatch();
  const [dataApi, setDataApi] = useState("");
  const { stocknews } = useSelector((state) => state.news);
  const getProducts = useCallback(() => {
    dispatch(getStockNews());
    console.log(stocknews);
  }, [dataApi]);
  useEffect(() => {
    getProducts();
  }, [dataApi]);
  let stockNews = stocknews;
  return (
    <div className={StockNewsClasses.containerdiv}>
      <Fade bottom>
        <div className={StockNewsClasses.newsdiv}>
          <div>
            <ThemeProvider theme={theme}>
              <Typography
                variant="h2"
                sx={{
                  "&:hover": {
                    color: "#002244",
                  },
                }}
              >
                <Link className={StockNewsClasses.titlelink}>
                  Stocks
                  <ArrowForwardIosIcon sx={{ marginLeft: "10px" }} />
                </Link>
              </Typography>
              <Typography variant="p" sx={{ color: "#002244" }}>
                What's Hot in Stock Market
              </Typography>
            </ThemeProvider>
          </div>
        </div>
        <div className={StockNewsClasses.newscontent}>
          <Carousel cols={3} rows={1} gap={10} loop>
            {stockNews.map((el, i) => {
              return (
                <Carousel.Item key={i}>
                  <Card
                    sx={{
                      width: 500,
                      height: 500,
                      borderRadius: "15px",
                      border: "5px solid white",
                      padding: 3,
                      "&:hover": {
                        border: "5px solid #002244",
                      },
                    }}
                    key={i}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="250px"
                        image={el.image_url}
                        alt="image not found"
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{ "&:hover": { textDecoration: "underline" } }}
                        >
                          <Link
                            to={el.article_url}
                            style={{ color: "#1F305E", textDecoration: "none" }}
                          >
                            {el.title}
                          </Link>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {el.description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}

export default StockNews;
