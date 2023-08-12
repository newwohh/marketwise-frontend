const useHeaderStyles = {
  section: {
    background: "linear-gradient(to top, #F0F8FF 0%, #537895 100%)",
  },
  headerintrotext: {
    fontSize: {
      xs: "30px",
      xl: "100px",
    },
    marginTop: "370px",
    color: "white",
    zIndex: 1,
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
    fontWeight: 1000,
    background:
      "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
    backgroundClip: "text",
    WebkitTextFillColor: "black",
  },
  headerintrodiv: {
    display: "flex",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
    textAlign: "center",
  },
  explorebtn: {
    width: "200px",
    borderRadius: "40px",
    height: "55px",
    border: "3px solid #002244",
    marginTop: "600px",
    color: "#002244",
    position: "absolute",
    zIndex: 1,
    marginLeft: "50%",
    marginRight: "50%",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      border: "1px solid #F5F5F5",
      color: "black",
    },
  },
};

export default useHeaderStyles;
