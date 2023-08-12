import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import useCryptoNewsStyles from "../../../../../../styles/Home/CryptoNewsStyles";

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

function CryptoNewsCard(props) {
  const CryptoNewsClasses = useCryptoNewsStyles;

  const [open, setOpen] = React.useState(false);
  const [cryptoNewsModal, setCryptoNewsModal] = React.useState({
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

  return (
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
            onClick={() => handleOpen(props.news)}
            sx={{
              "&:hover": { textDecoration: "underline" },
              color: "#002244",
              textDecoration: "none",
            }}
          >
            {props.news.title}
          </Link>
        </Typography>
        <Typography variant="p" sx={{ fontSize: "12px" }}>
          {props.news.description} <br></br>
        </Typography>
        <Button
          href={props.news.link}
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
  );
}

export default CryptoNewsCard;
