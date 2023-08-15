import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { analyze } from "../components/ChatSupport/chatutils";

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
