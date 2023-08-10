const useInvestSimulatorStyles = {
  detailsdiv: {
    padding: "40px",
    height: "200px",
    width: "520px",
    marginTop: "30px",
    backgroundColor: "#002244",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "40px",
    borderRadius: "10px",
    "@media (max-width:1000px)": {
      padding: 2,
      height: "100px",
      width: "350px",
    },
  },
  calcdiv: { display: " flex", flexDirection: "column", width: "600px" },
  detailsdivtwo: {
    marginLeft: "30px",
    padding: "40px",
    height: "460px",
    width: "960px",
    marginTop: "30px",
    backgroundColor: "#002244",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "40px",
    borderRadius: "10px",
    "@media (max-width:1000px)": {
      width: "300px",
    },
  },
};

export default useInvestSimulatorStyles;
