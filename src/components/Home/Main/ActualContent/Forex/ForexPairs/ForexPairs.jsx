import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForexData } from "../../../../../../store/store-actions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useForexDataStyles from "../../../../../../styles/ForexData";
import Carousel from "better-react-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { Button, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import chatsupport from "../../../../../../assets/5114855.jpg";
import faq from "../../../../../../assets/5066368.jpg";
import blog from "../../../../../../assets/5396346.jpg";

const forexCard = (data, i) => {
  return (
    <Card
      key={i}
      sx={{
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
        width: "250px",
        height: 200,
        padding: 1,
        boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        "&:hover": {
          color: "#002244",
          backgroundColor: "#E1EBEE",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, fontFamily: "Malgun Gothic", color: "navy" }}
        >
          {data ? data.symbol : "Currency Symbol"}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            width: "150px",
            height: 30,
            fontSize: "10px",
            borderRadius: 13,
            color: "grey",
            "&:hover": { backgroundColor: "#002244", color: "white" },
          }}
        >
          {data ? data.currency_group : "Sorry couldnt fetch data"}
        </Button>
        <Typography varian="p">
          {data ? data.currency_base : "Currency Base"}
        </Typography>
        <Typography varian="h5">
          {data ? data.currency_quote : "Currency Quote"}
        </Typography>
      </CardContent>
    </Card>
  );
};

function ForexPairs() {
  const [apiData, setApiData] = useState("");
  const dispatch = useDispatch();
  const { forexdata } = useSelector((state) => state.news);
  const getProducts = useCallback(() => {
    dispatch(getForexData());
  }, [apiData]);
  useEffect(() => {
    getProducts();
  }, [apiData]);
  const forexDataClass = useForexDataStyles();
  console.log(forexdata);
  const forexCardData = forexdata;
  console.log(forexCardData);
  return (
    <div className={forexDataClass.containerdiv}>
      <div className={forexDataClass.titlediv}>
        <ThemeProvider theme={theme}>
          <Typography variant="h2">
            <Link className={forexDataClass.titlelink}>
              Forex <ArrowForwardIosIcon sx={{ marginLeft: "10px" }} />
            </Link>
          </Typography>
          <Typography variant="p">Know all the exchanges available</Typography>
        </ThemeProvider>
      </div>
      <div>
        <Carousel cols={5} rows={1} gap={15} loop>
          {forexCardData.map((el, i) => (
            <Carousel.Item>{forexCard(el, i)}</Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className={forexDataClass.lastcontainer}>
        <div>
          <div>
            <Typography
              variant="h4"
              sx={{ fontWeight: 1000, color: "#002244" }}
            >
              Need help?
            </Typography>
          </div>
        </div>
        <div className={forexDataClass.seconddiv}>
          <div style={{ display: "flex" }}>
            <div>
              <img src={blog} style={{ width: 100, height: 100 }} />
            </div>
            <div className={forexDataClass.seconddatasubdiv}>
              <Typography variant="h6">Blog</Typography>
              <Typography variant="p">
                Stay up to date with the latest stories and commentary.
              </Typography>
              <Link className={forexDataClass.lastdivlink}>Learn More</Link>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img src={faq} style={{ width: 100, height: 100 }} />
            </div>
            <div className={forexDataClass.seconddatasubdiv}>
              <Typography variant="h6">FAQs</Typography>
              <Typography variant="p">
                View FAQs for detailed instructions on specific features.
              </Typography>
              <Link className={forexDataClass.lastdivlink}>Learn more</Link>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img src={chatsupport} style={{ width: 100, height: 100 }} />
            </div>
            <div className={forexDataClass.seconddatasubdiv}>
              <Typography variant="h6">24/7 Chat Support</Typography>
              <Typography variant="p">
                Get 24/7 chat support with our friendly customer service agents
                at your service.
              </Typography>
              <Link className={forexDataClass.lastdivlink}>Chat now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForexPairs;
