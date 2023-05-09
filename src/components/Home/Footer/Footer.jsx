import React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFooterStyles from "../../../styles/FooterStyles";
import { Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

function Footer() {
  const FooterClasses = useFooterStyles();

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
      className={FooterClasses.footer}
      style={{ backgroundColor: "#002244" }}
    >
      <div className={FooterClasses.footercontainter}>
        <TableContainer
          component={Paper}
          sx={{ padding: 10, backgroundColor: "#002244" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                  <TableCell component="th" scope="row" sx={{ border: "none" }}>
                    {i === 0 ? (
                      <Link className={FooterClasses.footerlinks}>
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
                    sx={{ border: "none" }}
                  >
                    <Link className={FooterClasses.footerlinks}>
                      {row.products}
                    </Link>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Link className={FooterClasses.footerlinks}>
                      {row.company}
                    </Link>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Link className={FooterClasses.footerlinks}>
                      {row.community}
                    </Link>
                  </TableCell>
                  <TableCell align="left" sx={{ border: "none" }}>
                    <Link className={FooterClasses.footerlinks}>{row.faq}</Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </footer>
  );
}

export default Footer;
