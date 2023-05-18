import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFooterLearnStyles from "../../../styles/Home/FooterStyles";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

function FooterLearn() {
  const FooterLearnClasses = useFooterLearnStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.up("md"));

  const rows = [
    createData("Heat Map", "About", "Join Community", "Have Questions?"),
    createData("Charts", "Features", "Chat", ""),
    createData("Blogs", "Pricing", "", ""),
    createData("Premium Subscription", "", "", ""),
    createData("Tracker Multiple Markets", "", "", ""),
    createData("Blogs", "", "", ""),
  ];
  function createData(products, company, community, faq, img) {
    return { products, company, community, faq, img };
  }
  return (
    <footer
      className={FooterLearnClasses.footer}
      style={{ backgroundColor: "#002244" }}
    >
      <div className={FooterLearnClasses.footercontainter}>
        {isMatch ? (
          <TableContainer
            component={Paper}
            sx={{
              //   padding: 10,
              backgroundColor: "#002244",
              "@media (max-width : 1000px)": {
                padding: 0,
                width: "600px",
              },
            }}
          >
            <Table
              sx={{
                minWidth: 650,
                "@media (max-width : 1000px)": {
                  width: "600px",
                },
              }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell sx={{ border: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Arial",
                        color: "white",
                      }}
                    >
                      Trade View
                    </Typography>
                    <Typography sx={{ color: "white" }} variant="p">
                      Break the limits
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Arial",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      Products
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Arial",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      Company
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Arial",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      Community
                    </Typography>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        fontFamily: "Arial",
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      FAQs
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (
                  <TableRow key={i}>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        border: "none",
                        "@media (max-width : 1000px)": {
                          width: "10px",
                          marginBottom: "-20px",
                        },
                      }}
                    >
                      {i === 0 ? (
                        <Link className={FooterLearnClasses.footerlinks}>
                          <InstagramIcon sx={{ marginRight: 1 }} />
                          <TwitterIcon sx={{ marginRight: 1 }} />
                          <GitHubIcon />
                        </Link>
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell
                      align="left"
                      component="th"
                      scope="row"
                      sx={{
                        border: "none",
                        "@media (max-width : 1000px)": {
                          margin: "0px",
                          height: "0px",
                        },
                      }}
                    >
                      <Link className={FooterLearnClasses.footerlinks}>
                        {row.products}
                      </Link>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        border: "none",
                        "@media (max-width : 1000px)": {
                          margin: "0px",
                          height: "0px",
                        },
                      }}
                    >
                      <Link className={FooterLearnClasses.footerlinks}>
                        {row.company}
                      </Link>
                    </TableCell>
                    <TableCell align="left" sx={{ border: "none" }}>
                      <Link className={FooterLearnClasses.footerlinks}>
                        {row.community}
                      </Link>
                    </TableCell>
                    <TableCell align="left" sx={{ border: "none" }}>
                      <Link className={FooterLearnClasses.footerlinks}>
                        {row.faq}
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Box
            sx={{
              backgroundColor: "#002244",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={6}
              justifyItems="center"
              textAlign="center"
              sx={{ marginTop: "50px" }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  fontFamily: "Arial",
                  color: "white",
                }}
              >
                Trade View
              </Typography>
              <Typography sx={{ color: "white" }} variant="p">
                Break the limits
              </Typography>
              <Paper
                sx={{
                  marginTop: "50px",
                  backgroundColor: "#002244",
                  textAlign: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <List>
                  <Typography variant="h6" sx={{ color: "white" }}>
                    Products
                  </Typography>
                  {rows.map((a, i) => {
                    return (
                      <ListItem key={i}>
                        <Link
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                        >
                          {a.products}{" "}
                        </Link>
                      </ListItem>
                    );
                  })}
                  <Typography
                    variant="h6"
                    sx={{ color: "white", marginTop: "50px" }}
                  >
                    Community
                  </Typography>
                  {rows.map((a, i) => {
                    return (
                      <ListItem key={i}>
                        <Link
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                        >
                          {a.community}{" "}
                        </Link>
                      </ListItem>
                    );
                  })}
                  <Typography
                    variant="h6"
                    sx={{ color: "white", marginTop: "50px" }}
                  >
                    Company
                  </Typography>
                  {rows.map((a, i) => {
                    return (
                      <ListItem key={i}>
                        <Link
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                        >
                          {a.company}{" "}
                        </Link>
                      </ListItem>
                    );
                  })}
                  <Typography
                    variant="h6"
                    sx={{ color: "white", marginTop: "50px" }}
                  >
                    FAQs
                  </Typography>
                  {rows.map((a, i) => {
                    return (
                      <ListItem key={i}>
                        <Link
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                        >
                          {a.faq}{" "}
                        </Link>
                      </ListItem>
                    );
                  })}
                </List>
              </Paper>
            </Grid>
          </Box>
        )}
      </div>
    </footer>
  );
}

export default FooterLearn;
