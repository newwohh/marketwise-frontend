const useAbout = {
  mainabout: {
    backgroundColor: "#F0F8FF",
    textAlign: "center",
    height: "1000px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  contentdiv: {
    width: "900px",
    "@media (max-width:1000px)": {
      width: "300px",
    },
  },
  contentdivtwo: {
    padding: 50,
    textAlign: "left",
    marginTop: "150px",
    width: "500px",
    height: "350px",
    backgroundColor: "#E1EBEE",
    border: "1rem solid #aaaaff",
    borderRadius: "30px",
    "@media (max-width:1000px)": {
      display: "none",
      width: "300px",
      height: "750px",
      fontSize: "15px",
      marginTop: 0,
    },
  },
};

export default useAbout;
