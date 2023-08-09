const useForexDataStyles = {
  containerdiv: {
    // margin: "100px",
    backgroundColor: "#F0F8FF",
    "@media (max-width : 1000px)": {
      margin: "0px",
      // marginTop: "100px",
    },
  },
  titlediv: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    marginBottom: "100px",
  },
  titlelink: {
    textDecoration: "none",
    color: "#002244",
    "&:hover": {
      color: "#002244",
      textDecoration: "underline",
    },
  },
  lastcontainer: {
    // margin: "100px",
    padding: 30,
    height: "300px",
    marginTop: 250,
    backgroundColor: "white",
    borderRadius: "100px",
    textAlign: "center",
    marginLeft: "70px",
    marginRight: "70px",
    border: "1rem solid #aaaaff",
    borderImage:
      "repeating-linear-gradient(45deg, transparent, transparent 5px, $accentColor 6px, $accentColor 15px, transparent 16px, transparent 20px) 20/1rem",
    "@media (max-width : 1000px)": {
      padding: 10,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: "10px",
      marginTop: "600px",
      width: "360px",
      height: "1000px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  seconddiv: {
    display: "flex",
    marginTop: 50,
    "@media (max-width : 1000px)": {
      margin: 0,
      width: "400px",
      flexDirection: "column",
    },
  },
  carddiv: {
    display: "flex",
    "@media (max-width : 1000px)": {
      height: "200px",
      fontSize: 15,
      width: "150px",
      marginTop: "50px",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  seconddatasubdiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginRight: 50,
    "@media (max-width : 1000px)": {
      justifyContent: "center",
      alignItems: "center",
      marginRight: 0,
    },
  },

  lastdivlink: {
    color: "#002244",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" },
  },
  caraoudiv: {
    "@media (max-width :1000px)": {
      width: 200,
    },
  },
};

export default useForexDataStyles;
