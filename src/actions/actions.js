import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { analyze } from "../components/ChatSupport/chatutils";
import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const getUser = (state) => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  state = user;
};

export const checkBlogs = (allblogs) => {
  if (allblogs === undefined || allblogs.data === undefined) {
    return [{ title: "loading" }];
  } else {
    return allblogs.data;
  }
};

export const chatbotMessageList = (messages, text, analyse) => {
  let list = [...messages, { message: text, user: true }];
  console.log(list);
  if (list.length > 2) {
    const reply = analyze(text);
    list = [...messages, { message: reply }];
  } else {
    list = [
      ...list,
      {
        message: " Hi! What can i help you ?",
      },
      {
        message: "What do you want to know about?",
      },
    ];
  }

  return list;
};

export const setColorForHeatmap = (
  lastDay,
  themeOne,
  themeTwo,
  themeThree,
  themeFour
) => {
  if (lastDay > 1) {
    return themeOne;
  } else if (lastDay < 0) {
    return themeTwo;
  } else if (lastDay > 0 && lastDay < 1) {
    return themeThree;
  } else {
    return themeFour;
  }
};

export const heatmapData = (props, stocks) => {
  let maps = [],
    isProps;
  if (props.cryptomap) {
    maps = props.cryptomap;
    isProps = true;
  } else if (props.stocks) {
    isProps = false;
    maps = stocks;
  }

  return { maps: maps, isProps: isProps };
};

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export function createData(products, company, community, faq, img) {
  return { products, company, community, faq, img };
}

export function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export const investSimulatorCalcHandler = (price, change, durationInYear) => {
  let priceOfTickerParsed = parseFloat(price);
  let changeOfTickerParsed = parseFloat(change);
  let percentageOfChange = (priceOfTickerParsed * changeOfTickerParsed) / 100;
  let changed;
  if (priceOfTickerParsed > 0) {
    changed = (priceOfTickerParsed + percentageOfChange) * durationInYear;
  } else if (priceOfTickerParsed < 0) {
    changed = priceOfTickerParsed - percentageOfChange;
  }

  return changed;
};

export const textHandler = (text) => {
  const title = text.title;
  const description = text.description;
  const data = text.list.map((el) => el.list_title + el.list_description);

  return title + description + data;
};

export const setCurrentUser = (user) => {
  let currUserName, currUserEmail;

  user.user ? (currUserName = user.user.name) : (currUserName = "please wait");
  user.user
    ? (currUserEmail = user.user.email)
    : (currUserEmail = "please wait");

  return {
    currUserName,
    currUserEmail,
  };
};

export function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
