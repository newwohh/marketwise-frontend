const useStyles = {
  toolbar: {
    display: "flex",
    backgroundColor: "hsla(0, 0%, 0%, 0)",
    alignItems: "center",
    height: 50,
  },
  navdivone: {
    display: "flex",
    alignItems: "center",
    marginLeft: 50,
    flexGrow: 1,
  },
  navdivtwo: {
    flexGrow: 1,
  },
  navdivthree: {
    marginRight: 50,
    flexFlow: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    color: "white",
  },
  logoimg: {
    width: "50px",
    height: "50px",
    color: "white",
  },
  // collapse: {
  //   backgroundColor: "",
  // },
  expanded: {
    marginLeft: "100px",
    backgroundColor: "white",
    marginTop: "10px",
    borderRadius: 20,
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
  listitem: {
    display: "flex",
    justifyContent: "space-between",
    "&:hover": {
      backgroundColor: "whitesmoke",
    },
  },
  listitemlink: {
    color: "black",
    display: "flex",
    alignItems: "center",
    justifyItems: "center",
    justifyContent: "space-evenly",
    textDecoration: "none",
    marginLeft: 10,
  },
  productlisticon: {
    marginRight: 5,
  },
  listitemlinkoverview: {
    display: "flex",
    alignItems: "center",
    color: "black",
    textDecoration: "none",
    marginLeft: 30,
  },
  listitemoverview: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "beige",
    },
  },
  overviewicon: {
    marginRight: 5,
  },
  shownav: {
    backgroundColor: "#002244",
  },
};

export default useStyles;
