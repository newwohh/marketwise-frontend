const useCryptoNewsStyles = {
  csection: {
    width: "100%",
    // marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
  },
  cndivtop: {
    width: "100%",
    textAlign: "center",
  },
  titlelink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  cnewscarddiv: {
    marginTop: "60px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    "@media (max-width: 1000px)": {
      marginTop: 0,
    },
  },
  cardiv: {
    margin: "100px",
    "@media (max-width: 1000px)": {
      width: "200px",
    },
  },
  modalStyle: {
    // opacity: 0.5,
  },
};

export default useCryptoNewsStyles;
