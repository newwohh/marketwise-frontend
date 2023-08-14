import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStockNews from "../../../../../../styles/Home/StockNewsStyle";

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

function StockNewsCard(props) {
  const StockNewsClasses = useStockNews;
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

  return (
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
      key={props.i}
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
            image={props.el.urlToImage}
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
              onClick={() => handleOpen(props.el)}
              sx={StockNewsClasses.cardTitle}
            >
              {props.el.title}
            </Link>
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "15px" }}
          >
            {props.el.description}
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
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Title: {newsModal.title}
            </Typography>
            <Typography id="modal-modal-author" variant="h6" component="h3">
              Author: {newsModal.author}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Description: {newsModal.description}
            </Typography>
            <Button href={newsModal.url}>Click to Visit Website</Button>
          </Box>
        </Modal>
      </CardActionArea>
    </Card>
  );
}

export default StockNewsCard;
