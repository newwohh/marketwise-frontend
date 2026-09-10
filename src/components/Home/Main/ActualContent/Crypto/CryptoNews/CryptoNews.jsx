import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useCryptoNewsStyles from "../../../../../../styles/Home/CryptoNewsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import { getCryptoNews } from "../../../../../../reducers/reducers";
import { Link } from "react-router-dom";
import CryptoNewsCard from "./CryptoNewsCard";

function CryptoNews() {
  const CryptoNewsClasses = useCryptoNewsStyles;
  const { news } = useSelector((state) => state.marketwise);
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
            <Box sx={{ ...CryptoNewsClasses.cardiv, "& .swiper": {
              height: "650px",
              "@media (max-width: 1000px)": { height: "1100px" },
              "@media (max-width: 699px)": { height: "370px" },
            } }}>
              <Swiper
                modules={[A11y, Navigation, Grid]}
                navigation
                rewind
                slidesPerView={1}
                spaceBetween={10}
                breakpoints={{ 700: { slidesPerView: 2, grid: { rows: 3, fill: "row" } } }}
                style={{ width: "min(900px, 75vw)" }}
              >
                {news.results?.map((el, i) => {
                  return (
                    <SwiperSlide key={i} style={{ width: 100 }}>
                      <CryptoNewsCard news={el} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
          </div>
        </Box>
      </div>
    </div>
  );
}
export default CryptoNews;
