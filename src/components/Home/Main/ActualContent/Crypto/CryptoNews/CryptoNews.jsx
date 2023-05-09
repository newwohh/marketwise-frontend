import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useCryptoNewsStyles from "../../../../../../styles/CryptoNewsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { getCryptoNews } from "../../../../../../store/store-actions";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import Carousel from "better-react-carousel";

function CryptoNews() {
  const newsCard = (news, i) => {
    return (
      <Carousel.Item key={i} style={{ height: "200px" }}>
        <Card
          sx={{
            height: "200px",
            cursor: "pointer",
            marginRight: "50px",
            border: "1px solid #F0F0F0",
            backgroundColor: "white",
            boxShadow: "none",
            "&:hover": { backgroundColor: "#E1EBEE", color: "blue" },
          }}
        >
          <CardContent>
            <div>
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
            </div>
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
  // card = news.results?.map((el, i) => newsCard(el, i));
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
                <Typography variant="h2">
                  Crypto Currency <ArrowForwardIosIcon sx={{ ml: "-10px" }} />
                </Typography>
              </ThemeProvider>
            </Link>
          </Typography>
          <Typography variant="p" sx={{ fontFamily: "sans-serif" }}>
            What's Happening in Crypto
          </Typography>
        </div>
        <div className={CryptoNewsClasses.cnewscarddiv}>
          <div>
            <div style={{ margin: "100px" }}>
              {/* <Carousel cols={2} rows={2} gap={10} loop>
                {card}
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CryptoNews;
