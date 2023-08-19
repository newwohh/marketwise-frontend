import React, { useContext, useState } from "react";
import BookIcon from "@mui/icons-material/Book";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import BarChartIcon from "@mui/icons-material/BarChart";
import ViewCompactIcon from "@mui/icons-material/ViewCompact";
import { Collapse, Container, List, ListItem, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useStyles from "../../../../styles/Home/NavBarStyles";
import { directHeatmap } from "../../../../api";
import { MyContext } from "../../../../context/Context";

function MarketCollapse(props) {
  const { user } = useContext(MyContext);
  const [expandIcon, setExpandIcon] = useState(false);
  const classes = useStyles;
  const expand = () => setExpandIcon(!expandIcon);
  const navigation = useNavigate();

  return (
    <Collapse
      in={props.collapse}
      timeout="auto"
      unmountOnExit
      style={classes.collapse}
      sx={{ width: 300, position: "absolute" }}
    >
      <Container
        style={classes.expanded}
        sx={{
          width: 300,
          position: "absolute",
          marginLeft: "170px",
        }}
        onMouseLeave={props.openCollapse}
      >
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
          }}
        >
          <ListItem alignItems="center" style={classes.listitem}>
            <Link
              style={classes.listitemlink}
              onClick={() => directHeatmap(navigation, user)}
            >
              <LocalFireDepartmentIcon style={classes.productlisticon} />
              <Typography variant="">Heat Map</Typography>
            </Link>
          </ListItem>
          <ListItem alignItems="center" style={classes.listitem}>
            <Link to="subscription" style={classes.listitemlink}>
              <BarChartIcon style={classes.productlisticon} />
              Subscription
            </Link>
          </ListItem>
          <ListItem alignItems="center" style={classes.listitem}>
            <Link to="/blogs" style={classes.listitemlink}>
              {" "}
              <BookIcon style={classes.productlisticon} />
              Blogs
            </Link>
          </ListItem>
          <ListItem alignItems="center" style={classes.listitem}>
            <Link to="/investsimulator" style={classes.listitemlink}>
              {" "}
              <FeaturedPlayListIcon style={classes.productlisticon} />
              Invest Simulator
            </Link>
          </ListItem>
          <ListItem alignItems="center" style={classes.listitem}>
            <Link style={classes.listitemlink} onClick={expand}>
              <ViewCompactIcon style={classes.productlisticon} />
              Overview of Markets
            </Link>
            {expandIcon ? (
              <ExpandLess sx={{ marginLeft: "7px", color: "black" }} />
            ) : (
              <ExpandMore sx={{ marginLeft: "7px", color: "black" }} />
            )}
          </ListItem>
          <Collapse
            in={expandIcon}
            timeout="auto"
            unmountOnExit
            style={classes.collapse}
          >
            <List>
              <ListItem style={classes.listitemoverview}>
                <Link to="stocks" style={classes.listitemlinkoverview}>
                  <ShowChartIcon style={classes.overviewicon} />
                  Share Market
                </Link>
              </ListItem>
              <ListItem style={classes.listitemoverview}>
                <Link to="cryptocurrency" style={classes.listitemlinkoverview}>
                  <CurrencyBitcoinIcon style={classes.overviewicon} />
                  CryptoCurrency
                </Link>
              </ListItem>
              <ListItem style={classes.listitemoverview}>
                <Link style={classes.listitemlinkoverview}>
                  <CurrencyExchangeIcon style={classes.overviewicon} />
                  Foreign Exchange
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Container>
    </Collapse>
  );
}

export default MarketCollapse;
