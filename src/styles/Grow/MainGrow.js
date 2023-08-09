const useMainGrowStyles = {
  firstsection: {
    background: "linear-gradient(to top, #F0F8FF 0%, #537895 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  introtextgrow: {
    width: "900px",
    textAlign: "center",
  },
  secondsectiongrow: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: "100px",
    "@media (max-width:1000px)": {
      marginTop: "100px",
    },
  },
  growimg: {
    width: "350px",
    height: "300px",
    "@media (max-width:1000px)": {
      height: "200px",
      width: "250px",
    },
  },
  contentdiv: {
    left: 0,
    right: 0,
    width: "1200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: "100px",
    borderRadius: "25px",
    backgroundColor: "white",
    border: "1rem solid #aaaaff",
    borderImage:
      "repeating-linear-gradient(45deg, transparent, transparent 5px, $accentColor 6px, $accentColor 15px, transparent 16px, transparent 20px) 20/1rem",
    "@media (max-width:1000px)": {
      flexDirection: "column",
      width: "300px",
    },
  },
  infosection: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infodivgrow: {
    padding: 50,
    borderRadius: "15px",
    color: "white",
    marginTop: "100px",
    display: "flex",
    flexDirection: "column",
    width: "1200px",
    backgroundColor: "#5D76A9",
  },
  infosubdivgrow: {
    display: "flex",
    marginTop: "50px",
    "@media (max-width:1000px)": {
      flexDirection: "column",
      width: "250px",
      marginTop: "50px",
    },
  },
  infosubcontentdivgrow: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "@media (max-width:1000px)": {
      marginTop: "50px",
    },
  },
};

export default useMainGrowStyles;
