import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useCryptoNewsStyles from "../../../../../../styles/Home/CryptoNewsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoNews } from "../../../../../../store/store-actions";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import Carousel from "better-react-carousel";

function CryptoNews() {
  const newsCard = (news, i) => {
    return (
      <Carousel.Item key={i} style={{ width: 100 }}>
        <Card
          sx={{
            height: "200px",
            cursor: "pointer",
            marginRight: "50px",
            border: "1px solid #F0F0F0",
            backgroundColor: "white",
            boxShadow: "none",
            "&:hover": { backgroundColor: "#E1EBEE", color: "blue" },
            "@media (max-width: 1000px)": {
              width: "150px",
              height: "350px",
              marginRight: "0px",
              border: "none",
              overflow: "scroll",
            },
          }}
        >
          <CardContent
            sx={{
              "@media (max-width: 1000px)": {
                width: "150px",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#002D62",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              <Link
                to={news.link}
                style={{
                  color: "#002D62",
                  textDecoration: "none",
                }}
              >
                {news.title}
              </Link>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "12px" }}>
              {news.description}
            </Typography>
            <Button
              href={news.link}
              sx={{
                "&:hover": { color: "#011F5B" },
                borderRadius: "13px",
                height: "30px",
              }}
            >
              Click To Know More
            </Button>
          </CardContent>
        </Card>
      </Carousel.Item>
    );
  };
  const [dataApi, setDataApi] = useState("");
  let card;
  const CryptoNewsClasses = useCryptoNewsStyles();
  const dispatch = useDispatch();
  const { news } = useSelector((state) => state.news);
  const getProducts = useCallback(() => {
    dispatch(getCryptoNews());
    console.log(news);
  }, [dataApi]);
  useEffect(() => {
    getProducts();
  }, [dataApi]);
  card = news.results?.map((el, i) => newsCard(el, i));
  return (
    <div className={CryptoNewsClasses.csection}>
      <div className={CryptoNewsClasses.cndivtop}>
        <div>
          <Typography
            variant="h3"
            sx={{ fontFamily: "monospace", fontWeight: 800 }}
          >
            <Link className={CryptoNewsClasses.titlelink}>
              <ThemeProvider theme={theme}>
                <Typography
                  variant="h2"
                  sx={{
                    "@media (max-width: 1000px)": {
                      fontSize: "25px",
                    },
                  }}
                >
                  Crypto Currency{" "}
                  <ArrowForwardIosIcon
                    sx={{
                      ml: "-10px",
                      "@media (max-width: 1000px)": {
                        height: "9px",
                      },
                    }}
                  />
                </Typography>
              </ThemeProvider>
            </Link>
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontFamily: "sans-serif",
              "@media (max-width: 1000px)": {
                fontSize: "10px",
              },
            }}
          >
            What's Happening in Crypto
          </Typography>
        </div>
        <div className={CryptoNewsClasses.cnewscarddiv}>
          <div>
            <div
              style={{
                margin: "100px",
                // "@media (max-width: 1000px)": {
                //   width: 100,
                // },
              }}
              className={CryptoNewsClasses.cardiv}
            >
              <Carousel
                cols={2}
                rows={2}
                gap={10}
                loop
                responsiveLayout={[
                  {
                    breakpoints: 700,
                    rows: 1,
                    cols: 4,
                    loop: true,
                    // gap: 1,
                    // autoplay: 1000,
                  },
                ]}
              >
                {card}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CryptoNews;
