import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import useCryptoNewsStyles from "../../../../../../styles/Home/CryptoNewsStyles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useDispatch, useSelector } from "react-redux";
import { Button, Link, ThemeProvider } from "@mui/material";
import theme from "../../../../../../styles/Theme";
import Carousel from "better-react-carousel";
import { getCryptoNews } from "../../../../../../store/store-actions";

const style = {
  overflow: "scroll",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: "800px",
  backgroundColor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  zIndex: 1,
  opacity: 1,
};

function CryptoNews() {
  const [open, setOpen] = React.useState(false);
  const [cryptoNewsModal, setCryptoNewsModal] = useState({
    title: "",
    description: "",
    content: "",
    author: "",
  });
  const handleOpen = (el) => {
    setCryptoNewsModal({
      title: el.title,
      description: el.description,
      content: el.content,
      author: el.author,
    });
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const newsCard = (news, i) => {
    return (
      <Carousel.Item key={i} style={{ width: 100 }}>
        <Card
          sx={{
            height: "200px",
            cursor: "pointer",
            marginRight: "50px",
            border: "1px solid #F0F0F0",
            backgroundColor: "#F0F8FF",
            boxShadow: "none",
            color: "#002244",
            marginBottom: "10px",
            "&:hover": { color: "" },
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
                fontWeight: 700,
                fontSize: "15px",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Link
                onClick={() => handleOpen(news)}
                sx={{
                  "&:hover": { textDecoration: "underline" },
                  color: "#002244",
                  textDecoration: "none",
                }}
              >
                {news.title}
              </Link>
            </Typography>
            <Typography variant="p" sx={{ fontSize: "12px" }}>
              {news.description} <br></br>
            </Typography>
            <Button
              href={news.link}
              sx={{
                color: "white",
                "&:hover": { color: "white" },
                borderRadius: "13px",
                height: "30px",
              }}
            >
              Click To Know More
            </Button>
          </CardContent>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            style={CryptoNewsClasses.modalStyle}
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {cryptoNewsModal.author}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {cryptoNewsModal.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {cryptoNewsModal.description}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {cryptoNewsModal.content}
              </Typography>
            </Box>
          </Modal>
        </Card>
      </Carousel.Item>
    );
  };

  let card;
  const CryptoNewsClasses = useCryptoNewsStyles;
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const dispatchCrpytoNews = React.useCallback(() => {
    dispatch(getCryptoNews());
  }, []);
  useEffect(() => {
    dispatchCrpytoNews();
  }, []);
  card = news.results?.map((el, i) => newsCard(el, i));
  return (
    <div style={CryptoNewsClasses.csection}>
      <div style={CryptoNewsClasses.cndivtop}>
        <div>
          <Typography
            variant="h3"
            sx={{ fontFamily: "monospace", fontWeight: 800 }}
          >
            <Link href="/cryptocurrency" sx={CryptoNewsClasses.titlelink}>
              <ThemeProvider theme={theme}>
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
              </ThemeProvider>
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
        <div style={CryptoNewsClasses.cnewscarddiv}>
          <div>
            <div style={CryptoNewsClasses.cardiv}>
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
