import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForexData } from "../../../../../../store/store-actions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useForexDataStyles from "../../../../../../styles/Home/ForexData";
import Carousel from "better-react-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Button, Link, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import chatsupport from "../../../../../../assets/5114855.jpg";
import faq from "../../../../../../assets/5066368.jpg";
import blog from "../../../../../../assets/5396346.jpg";

const forexCard = (data, i) => {
  return (
    <Card
      key={i}
      sx={{
        margin: "25px",
        backgroundColor: "#F0F8FF",
        color: "#002244",
        display: "flex",
        justifyContent: "flex",
        alignItems: "center",
        width: "250px",
        height: 200,
        padding: 1,
        transition: "transform 0.3s",
        boxShadow: "0px 0px 0px 5px rgba(0, 0, 0, 0.05)",
        cursor: "pointer",
        "&:hover": {
          color: "#002244",
          backgroundColor: "#E1EBEE",
          boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
        },
      }}
    >
      <CardContent sx={{ textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, fontFamily: "Malgun Gothic" }}
        >
          {data ? data.symbol : "Currency Symbol"}
        </Typography>

        <Button
          variant="outlined"
          sx={{
            marginTop: "10px",
            marginBottom: "10px",
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
  const forexDataClass = useForexDataStyles;
  const forexCardData = forexdata;
  return (
    <div style={forexDataClass.containerdiv}>
      <div style={forexDataClass.titlediv}>
        <ThemeProvider theme={theme}>
          <Typography
            variant="h2"
            sx={{
              marginTop: "100px",
              color: "white",
              "@media (max-width : 1000px)": {
                fontSize: "25px",
              },
            }}
          >
            <Link sx={forexDataClass.titlelink}>
              Forex{" "}
              <ArrowForwardIosIcon
                sx={{
                  marginLeft: "-10px",
                  "@media (max-width : 1000px)": {
                    height: "9px",
                    marginLeft: "-10px",
                  },
                }}
              />
            </Link>
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#002244",
              "@media (max-width : 1000px)": {
                fontSize: "10px",
              },
            }}
          >
            Know all the exchanges available
          </Typography>
        </ThemeProvider>
      </div>
      <div>
        <Carousel
          cols={5}
          rows={1}
          gap={15}
          loop
          responsiveLayout={[
            {
              breakpoint: 700,
              cols: 1,
              rows: 1,
              gap: 0,
              loop: true,
              autoplay: 2000,
            },
          ]}
        >
          {forexCardData.map((el, i) => (
            <Carousel.Item key={i}>{forexCard(el, i)}</Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Box sx={forexDataClass.lastcontainer}>
        <Box>
          <div>
            <Typography
              variant="h4"
              sx={{ fontWeight: 1000, color: "#002244" }}
            >
              Need help?
            </Typography>
          </div>
        </Box>
        <Box sx={forexDataClass.seconddiv}>
          <Box sx={forexDataClass.carddiv}>
            <div>
              <img src={blog} alt="blog" style={{ width: 100, height: 100 }} />
            </div>
            <Box sx={forexDataClass.seconddatasubdiv}>
              <Typography variant="h6">Blog</Typography>
              <Typography variant="p">
                Stay up to date with the latest stories and commentary.
              </Typography>
              <Link href="/blogs" sx={forexDataClass.lastdivlink}>
                Learn More
              </Link>
            </Box>
          </Box>
          <Box sx={forexDataClass.carddiv}>
            <div>
              <img src={faq} alt="faq" style={{ width: 100, height: 100 }} />
            </div>
            <Box sx={forexDataClass.seconddatasubdiv}>
              <Typography variant="h6">FAQs</Typography>
              <Typography variant="p">
                View FAQs for detailed instructions on specific features.
              </Typography>
              <Link href="/faq" sx={forexDataClass.lastdivlink}>
                Learn more
              </Link>
            </Box>
          </Box>
          <Box sx={forexDataClass.carddiv}>
            <div>
              <img
                src={chatsupport}
                alt="chat-support"
                style={{ width: 100, height: 100 }}
              />
            </div>
            <Box sx={forexDataClass.seconddatasubdiv}>
              <Typography variant="h6">24/7 Chat Support</Typography>
              <Typography variant="p">
                Get 24/7 chat support with our friendly customer service agents
                at your service.
              </Typography>
              <Link sx={forexDataClass.lastdivlink}>Chat now</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default ForexPairs;
