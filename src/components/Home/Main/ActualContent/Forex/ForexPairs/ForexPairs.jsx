import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getForexData } from "../../../../../../reducers/reducers";
import Typography from "@mui/material/Typography";
import useForexDataStyles from "../../../../../../styles/Home/ForexData";
import Carousel from "better-react-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Link, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import chatsupport from "../../../../../../assets/5114855.jpg";
import faq from "../../../../../../assets/5066368.jpg";
import blog from "../../../../../../assets/5396346.jpg";
import ForexCard from "./ForexCard";

function ForexPairs() {
  const dispatch = useDispatch();
  const { forexdata } = useSelector((state) => state.marketwise);
  const getProducts = useCallback(() => {
    dispatch(getForexData());
  }, [dispatch]);
  useEffect(() => {
    getProducts();
  }, [getProducts]);
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
      <Box sx={{ margin: 10 }}>
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
            <Carousel.Item key={i}>
              {<ForexCard data={el} i={i} />}
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>
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
