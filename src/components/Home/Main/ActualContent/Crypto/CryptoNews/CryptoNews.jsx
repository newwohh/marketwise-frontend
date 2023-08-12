import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCryptoNewsStyles from "../../../../../../styles/Home/CryptoNewsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "better-react-carousel";
import { getCryptoNews } from "../../../../../../store/store-actions";
import { Link } from "react-router-dom";
import CryptoNewsCard from "./CryptoNewsCard";

function CryptoNews() {
  const CryptoNewsClasses = useCryptoNewsStyles;
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const dispatchCrpytoNews = React.useCallback(() => {
    dispatch(getCryptoNews());
  }, [dispatch]);
  useEffect(() => {
    dispatchCrpytoNews();
  }, [dispatchCrpytoNews]);
  return (
    <div style={CryptoNewsClasses.csection}>
      <div style={CryptoNewsClasses.cndivtop}>
        <div>
          <Typography
            variant="h3"
            sx={{ fontFamily: "monospace", fontWeight: 800 }}
          >
            <Link to="/cryptocurrency" sx={CryptoNewsClasses.titlelink}>
              {/* <ThemeProvider theme={theme}> */}
              <Typography
                variant="h2"
                sx={{
                  marginTop: "400px",
                  color: "#002244",
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
              {/* </ThemeProvider> */}
            </Link>
          </Typography>
          <Typography
            variant="p"
            sx={{
              color: "#002244",
              fontFamily: "sans-serif",
              "@media (max-width: 1000px)": {
                fontSize: "10px",
              },
            }}
          >
            What's Happening in Crypto
          </Typography>
        </div>
        <Box sx={CryptoNewsClasses.cnewscarddiv}>
          <div>
            <Box sx={CryptoNewsClasses.cardiv}>
              <Carousel
                cols={2}
                rows={3}
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
                {news.results?.map((el, i) => {
                  return (
                    <Carousel.Item key={i} style={{ width: 100 }}>
                      <CryptoNewsCard news={el} />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default CryptoNews;
