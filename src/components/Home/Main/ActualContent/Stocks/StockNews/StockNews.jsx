import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStockNews } from "../../../../../../store/store-actions";
import {
  Button,
  CircularProgress,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import useStockNews from "../../../../../../styles/Home/StockNewsStyle";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "better-react-carousel";
import { Fade } from "react-reveal";

const style = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 600,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function StockNews() {
  const [open, setOpen] = React.useState(false);
  const [newsModal, setNewsModal] = React.useState({
    author: "",
    title: "",
    description: "",
    image_url: "",
    link: "",
  });
  const handleOpen = (i) => {
    setNewsModal({
      author: i.author,
      title: i.title,
      description: i.description,
      image_url: i.image_url,
      link: i.article_url,
    });
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const StockNewsClasses = useStockNews;
  const dispatch = useDispatch();
  const { stocknews } = useSelector((state) => state.news);
  const getProducts = React.useCallback(() => {
    dispatch(getStockNews());
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  let stockNews = stocknews;
  return (
    <div style={StockNewsClasses.containerdiv}>
      <Fade bottom>
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
                    <Card
                      sx={{
                        width: 500,
                        height: 500,
                        borderRadius: "15px",
                        border: "5px solid white",
                        margin: "15px",
                        transition: "transform 0.3s",
                        padding: 3,
                        "&:hover": {
                          // border: "5px solid #002244",
                          boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
                        },
                        "@media (max-width: 1000px)": {
                          padding: 0,
                          textAlign: "center",
                          width: 400,
                          height: "500px",
                        },
                      }}
                      key={i}
                    >
                      <CardActionArea>
                        <CardContent
                          sx={{
                            "@media (max-width: 1000px)": {
                              display: "flex",
                              justifyContent: "center",
                              flexDirection: "column",
                              width: "220px",
                              textAlign: "center",
                            },
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="250px"
                            image={el.urlToImage}
                            alt="image not found"
                            sx={{
                              "@media (max-width: 1000px)": {
                                height: "100px",
                                width: "200px",
                              },
                            }}
                          />
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              "&:hover": {
                                textDecoration: "underline",
                                "@media (max-width: 1000px)": {
                                  fontSize: "1px",
                                },
                              },
                            }}
                          >
                            <Link
                              onClick={() => handleOpen(el)}
                              style={StockNewsClasses.cardTitle}
                            >
                              {el.title}
                            </Link>
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ fontSize: "15px" }}
                          >
                            {el.description}
                          </Typography>
                        </CardContent>
                        <Modal
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="modal-modal-title"
                          aria-describedby="modal-modal-description"
                        >
                          <Box sx={style}>
                            <CardMedia
                              component="img"
                              height="250px"
                              image={newsModal.urlToImage}
                              alt="image not found"
                              sx={{
                                height: "350px",
                                width: "600px",
                                "@media (max-width: 1000px)": {
                                  height: "100px",
                                  width: "200px",
                                },
                              }}
                            />
                            <Typography
                              id="modal-modal-title"
                              variant="h6"
                              component="h2"
                            >
                              Title: {newsModal.title}
                            </Typography>
                            <Typography
                              id="modal-modal-author"
                              variant="h6"
                              component="h3"
                            >
                              Author: {newsModal.author}
                            </Typography>
                            <Typography
                              id="modal-modal-description"
                              sx={{ mt: 2 }}
                            >
                              Description: {newsModal.description}
                            </Typography>
                            <Button href={newsModal.url}>
                              Click to Visit Website
                            </Button>
                          </Box>
                        </Modal>
                      </CardActionArea>
                    </Card>
                  </Carousel.Item>
                );
              })
            )}
          </Carousel>
        </div>
      </Fade>
    </div>
  );
}

export default StockNews;
