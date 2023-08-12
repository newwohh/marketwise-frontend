import React, { useRef, useState } from "react";
import useLearnContentStyles from "../../../styles/Learn/LearnContentStyles";
import {
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import StarIcon from "@mui/icons-material/Star";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import MonitorIcon from "@mui/icons-material/Monitor";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import StarsIcon from "@mui/icons-material/Stars";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StopIcon from "@mui/icons-material/Stop";
import Speech from "react-text-to-speech";

function ContentLearn() {
  // const [texts, setText] = useState(
  //   "please wait until the text is loading or you can try again!"
  // );
  const [play, setPLay] = useState(false);
  const managerisk = useRef(null);
  const whatistrading = useRef(null);
  const tradingacc = useRef(null);
  const learnread = useRef(null);
  const practicetrading = useRef(null);
  const learnanalyse = useRef(null);
  const LearnContentClasses = useLearnContentStyles;

  // const textToSpeech = (text) => {
  //   setText(text.current.outerText);
  //   setPLay(!play);
  //   console.log(text);
  // };

  return (
    <Box sx={LearnContentClasses.mains}>
      <Box sx={LearnContentClasses.section}>
        <Box sx={LearnContentClasses.titledivlearn}>
          <Box sx={LearnContentClasses.introdiv}>
            <Typography
              variant="h2"
              sx={{ fontFamily: "Helvetica" }}
              align="left"
            >
              MarketWise: The Ultimate Guide to Trading
            </Typography>
            <Typography align="left">
              Welcome to the MarketWise, your one-stop shop for learning about
              cryptocurrency, forex, and stock exchange trading. Whether you're
              a beginner or a seasoned investor, we have the resources you need
              to succeed.
            </Typography>
            <Typography align="left">
              Our website offers a variety of features to help you learn about
              the markets, including:
            </Typography>
            <List sx={{ textAlign: "center" }}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: 600 }}>
                  Real-time market data
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>News and analysis from experts</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  A community of traders to connect with
                </ListItemText>
              </ListItem>
            </List>
            <Typography align="left">
              We believe that everyone should have access to the tools they need
              to make informed investment decisions. That's why we offer our
              website for free. So what are you waiting for? Start learning
              today! Here are some additional details about the features we
              offer:
            </Typography>
            <List sx={{ textAlign: "center" }}>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText sx={{ fontWeight: 600 }}>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    Real-time market data
                  </Typography>
                  We provide real-time market data for all major
                  cryptocurrencies, forex pairs, and stock exchanges. This data
                  can be used to track the markets and make informed trading
                  decisions.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    News and analysis from experts
                  </Typography>
                  We provide news and analysis from leading financial experts.
                  This information can help you stay up-to-date on the latest
                  market trends and make informed investment decisions.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    Educational resources for beginners
                  </Typography>
                  We offer a variety of educational resources for beginners,
                  including articles, videos, and tutorials. These resources can
                  help you learn about the markets and get started with trading.{" "}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", fontWeight: 600 }}
                  >
                    A community of traders to connect with
                  </Typography>
                  We have a community of traders who are always willing to help
                  each other. This community can be a great resource for
                  learning about the markets and getting advice from experienced
                  traders.{" "}
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
      <Box sx={LearnContentClasses.navtolearn}>
        <Box
          sx={{
            marginTop: "100px",
            width: "100%",
            height: "100px",
            backgroundColor: "#5D76A9",
            borderRadius: "14px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width:1000px)": {
              height: "300px",
            },
          }}
        >
          <Stack
            direction="row"
            sx={{
              columnGap: "15px",
              "@media (max-width:1000px)": {
                display: "grid",
                rowGap: "5px",
                gridTemplateColumns: "200px",
              },
            }}
          >
            <Chip
              icon={<ShowChartIcon />}
              label="What is Trading"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                whatistrading.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<AccountBalanceIcon />}
              label="Open a Trading Account"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                tradingacc.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<AutoStoriesIcon />}
              label="Read About Trading"
              sx={{
                color: "white",
                height: "40px",
                width: "190px",
                cursor: "pointer",
              }}
              onClick={() =>
                learnread.current.scrollIntoView({ behavior: "smooth" })
              }
            />

            <Chip
              icon={<LocalLibraryIcon />}
              label="Learn to Analyze"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                learnanalyse.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<MonitorIcon />}
              label="Practice Trading"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                practicetrading.current.scrollIntoView({ behavior: "smooth" })
              }
            />
            <Chip
              icon={<ErrorOutlineIcon />}
              label="How to Manage Risk"
              sx={{
                color: "white",
                height: "40px",
                width: "150px",
                cursor: "pointer",
              }}
              onClick={() =>
                managerisk.current.scrollIntoView({ behavior: "smooth" })
              }
            />
          </Stack>
        </Box>
      </Box>
      <Box sx={LearnContentClasses.learncontentdiv}>
        <div ref={whatistrading}>
          <Box sx={LearnContentClasses.whatistrading}>
            <div id="whatistrading">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bolder",
                  marginBottom: "20px",
                }}
              >
                What is Trading ?
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontFamily: "Helvetica",
                  lineHeight: "45px",
                  fontSize: "20px",
                }}
                align="left"
              >
                Trading is the buying and selling of assets, such as stocks,
                bonds, currencies, and commodities. Traders buy assets when they
                believe the price will go up, and sell them when they believe
                the price will go down. They make money by buying low and
                selling high. Trading can be a very risky activity, but it can
                also be very rewarding. Successful traders can make a lot of
                money, but they also need to be prepared to lose money. Trading
                is not for everyone, and it is important to do your research
                before you start trading.
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <StarsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: "underline", fontWeight: "bold" }}
                      >
                        Stock trading:
                      </Typography>
                      This is the buying and selling of shares of ownership in a
                      company.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: "underline", fontWeight: "bold" }}
                      >
                        Bond trading{" "}
                      </Typography>
                      This is the buying and selling of debt securities issued
                      by governments or corporations.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: "underline", fontWeight: "bold" }}
                      >
                        Currency trading{" "}
                      </Typography>
                      This is the buying and selling of currencies.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <StarsIcon />
                    </ListItemIcon>
                    <ListItemText>
                      <Typography
                        variant="h6"
                        sx={{ textDecoration: "underline", fontWeight: "bold" }}
                      >
                        Commodity trading{" "}
                      </Typography>
                      This is the buying and selling of raw materials, such as
                      oil, gold, and wheat.
                    </ListItemText>
                  </ListItem>
                </List>
                <Speech
                  text={whatistrading.current.outerText}
                  startBtn={
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        width: "250px",
                        height: "45px",
                        margin: "50px",
                        borderRadius: "15px",
                        background:
                          "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                        "@media (max-width:1000px)": {
                          width: "200px",
                        },
                      }}
                    >
                      <PlayArrowIcon /> Click to Hear
                    </Button>
                  }
                  stopBtn={
                    <Button
                      variant="outlined"
                      sx={{
                        color: "white",
                        width: "250px",
                        height: "45px",
                        margin: "50px",
                        borderRadius: "15px",
                        background:
                          "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                        "@media (max-width:1000px)": {
                          width: "200px",
                        },
                      }}
                      onClick={() => {
                        setPLay(!play);
                        // return cancel();
                      }}
                    >
                      <StopIcon /> Stop
                    </Button>
                  }
                />
              </Typography>

              <Card
                sx={{
                  background:
                    "linear-gradient(109.6deg, rgb(27, 27, 79) 11.2%, rgb(120, 201, 244) 100.2%)",
                  borderRadius: "30px",
                }}
              >
                <CardContent sx={{ color: "white" }}>
                  <Typography>KEY TAKEWAYS</Typography>
                  <ul>
                    <li>
                      <Typography align="left">
                        Learning how to trade the financial markets begins with
                        educating oneself on reading the financial markets via
                        charts and price action.
                      </Typography>
                    </li>
                    <li>
                      <Typography align="left">
                        Use technical analysis, in conjunction with fundamental
                        analysis, to decipher price action.
                      </Typography>
                    </li>
                    <li>
                      <Typography align="left">
                        Practice makes perfect or, at the very least, it allows
                        the neophyte to test out theories before committing real
                        funds.
                      </Typography>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Box>
        </div>
        <div>
          <Box ref={tradingacc} sx={LearnContentClasses.tradingacc}>
            <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
              Open a Trading Account
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography>
                    Here are the steps on how to open a trading account in
                    India:
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography
                    variant="h6"
                    sx={{ textDecoration: "underline", lineHeight: "45px" }}
                  >
                    Choose a stock broker.
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    There are many different stock brokers in India, so it's
                    important to do your research and choose one that is a good
                    fit for you. Consider factors such as fees, trading
                    platforms, and customer service when making your decision.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                    Compare brokerage rates{" "}
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    Once you've chosen a few brokers, compare their brokerage
                    rates. This is the amount of money you'll pay each time you
                    make a trade. Some brokers offer discounts for high-volume
                    traders or for certain types of trades.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                    Get in touch with the broker for account opening.{" "}
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    Once you've chosen a broker, contact them to start the
                    account opening process. They will likely ask you to provide
                    some personal information, such as your name, address, and
                    PAN card number.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                    Fill out the account opening form
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    The broker will provide you with an account opening form.
                    This form will ask for more information about you, such as
                    your investment goals and your risk tolerance.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                    Submit your documents.{" "}
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    The broker will also ask you to submit some documents, such
                    as a copy of your PAN card and a recent bank statement. This
                    is to verify your identity and to ensure that you are
                    eligible to open a trading account.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                    Make a deposit.{" "}
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    Once your account has been approved, you will need to make a
                    deposit. This is the money that you will use to buy stocks
                    and other securities.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                    Start trading!{" "}
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    Once you have deposited money into your account, you are
                    ready to start trading. You can do this by placing orders
                    through the broker's trading platform.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Speech
              text={tradingacc.current.outerText}
              startBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <PlayArrowIcon /> Click to Hear
                </Button>
              }
              stopBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <StopIcon /> Stop
                </Button>
              }
            />
            <Card
              sx={{
                background:
                  "linear-gradient(109.6deg, rgb(27, 27, 79) 11.2%, rgb(120, 201, 244) 100.2%)",
                borderRadius: "30px",
              }}
            >
              <CardContent sx={{ color: "white" }}>
                <Typography>ADDITIONAL TIPS</Typography>
                <ul>
                  <li>
                    <Typography align="left">
                      Make sure you understand the risks involved in trading
                      before you start.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left">
                      Start with a small amount of money and gradually increase
                      your investment as you gain experience.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left">
                      Do your research before you buy any stocks or other
                      securities.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left">
                      Diversify your portfolio to reduce your risk.
                    </Typography>
                  </li>
                  <li>
                    <Typography align="left">
                      Be patient and don't expect to get rich quick.
                    </Typography>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Box>
        </div>
        <div>
          <Box ref={learnread} sx={LearnContentClasses.learnread}>
            <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
              Learn to Read: A Market Crash Course
            </Typography>

            <List>
              <ListItem>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    Financial articles, stock market books, website tutorials,
                    etc. There's a wealth of information out there, much of it
                    inexpensive to tap. It's important not to focus too narrowly
                    on one single aspect of the trading game. Instead, study
                    everything market-wise, including ideas and concepts you
                    don't feel are particularly relevant at this time. Trading
                    launches a journey that often winds up at a destination not
                    anticipated at the starting line. Your broad and detailed
                    market background will come in handy over and over again,
                    even if you think you know exactly where you’re going right
                    now.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography variant="p">
                    Here are five must-read books for every new trader:
                  </Typography>
                  <Typography variant="p" sx={{ lineHeight: "45px" }}>
                    <ul>
                      <li>Stock Market Wizards by Jack D. Schwager</li>
                      <li>Trading for a Living by Dr. Alexander Elder</li>
                      <li>
                        Technical Analysis of the Financial Markets by John
                        Murphy
                      </li>
                      <li>Stock Market Wizards by Jack D. Schwager</li>
                      <li>Winning on Wall Street by Martin Zweig</li>
                      <li> Nature of Risk by Justin Mamis</li>
                    </ul>
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    Start to follow the market every day in your spare time. Get
                    up early and read about overnight price action on foreign
                    markets. (U.S. traders didn't have to monitor global markets
                    a couple of decades ago, but that’s all changed due to the
                    rapid growth of electronic trading and derivative
                    instruments that link equity, forex, and bond markets around
                    the world.) News sites such as Yahoo Finance, Google
                    Finance, and CBS MoneyWatch serve as great resources for new
                    investors. For more sophisticated coverage, you need look no
                    further than The Wall Street Journal and Bloomberg.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Speech
              text={learnread.current.outerText}
              startBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <PlayArrowIcon /> Click to Hear
                </Button>
              }
              stopBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <StopIcon /> Stop
                </Button>
              }
            />
          </Box>
        </div>
        <div>
          <Box ref={learnanalyse} sx={LearnContentClasses.learnread}>
            <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
              Learn to Analyze{" "}
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    Study the basics of technical analysis and look at price
                    charts—thousands of them—in all time frames. You may think
                    fundamental analysis offers a better path to profits because
                    it tracks growth curves and revenue streams, but traders
                    live and die by price action that diverges sharply from
                    underlying fundamentals. Do not stop reading company
                    spreadsheets, because they offer a trading edge over those
                    who ignore them. However, they won’t help you survive your
                    first year as a trader.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ marginTop: "30px", lineHeight: "45px", fontSize: "20px" }}
              >
                <ListItemText>
                  <Typography variant="p">
                    Your experience with charts and technical analysis now
                    brings you into the magical realm of price prediction.
                    Theoretically, securities can only go higher or lower,
                    encouraging a long-side trade or a short sale. In reality,
                    prices can do many other things, including chopping sideways
                    for weeks at a time or whipsawing violently in both
                    directions, shaking out buyers and sellers.{" "}
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    The time horizon becomes extremely important at this
                    juncture. Financial markets grind out trends and trading
                    ranges with fractal properties that generate independent
                    price movements at short-term, intermediate-term, and
                    long-term intervals. This means a security or index can
                    carve out a long-term uptrend, intermediate downtrend, and a
                    short-term trading range, all at the same time. Rather than
                    complicate prediction, most trading opportunities will
                    unfold through interactions between these time intervals.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    Buying the dip offers a classic example, with traders
                    jumping into a strong uptrend when it sells off in a smaller
                    time period. The best way to examine this three-dimensional
                    playing field is to look at each security in three time
                    frames, starting with 60-minute, daily, and weekly charts.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Speech
              text={learnanalyse.current.outerText}
              startBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <PlayArrowIcon /> Click to Hear
                </Button>
              }
              stopBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <StopIcon /> Stop
                </Button>
              }
            />
          </Box>
        </div>
        <div>
          <Box ref={practicetrading} sx={LearnContentClasses.learnread}>
            <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
              Practice Trading
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    It’s now time to get your feet wet without giving up your
                    trading stake. Paper trading, or virtual trading, offers a
                    perfect solution, allowing the neophyte to follow real-time
                    market actions, making buying and selling decisions that
                    form the outline of a theoretical performance record. It
                    usually involves the use of a stock market simulator that
                    has the look and feel of an actual stock exchange's
                    performance. Make lots of trades, using different holding
                    periods and strategies, and then analyze the results for
                    obvious flaws.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ marginTop: "30px", lineHeight: "45px", fontSize: "20px" }}
              >
                <ListItemText>
                  <Typography variant="p">
                    Investopedia has a free stock market game, and many brokers
                    let clients engage in paper trading with their real money
                    entry systems, too. This has the added benefit of teaching
                    the software so you don’t hit the wrong buttons when you are
                    playing with family funds.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    So, when do you make the switch and start trading with real
                    money? There’s no perfect answer because simulated trading
                    carries a flaw that’s likely to show up whenever you start
                    to trade for real, even if your paper results look perfect.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    Traders need to coexist peacefully with the twin emotions of
                    greed and fear. Paper trading doesn’t engage these emotions,
                    which can only be experienced through actual profit and
                    loss. In fact, this psychological aspect forces more
                    first-year players out of the game than bad decision-making.
                    Your baby steps forward as a new trader need to recognize
                    this challenge and address remaining issues with money and
                    self-worth.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Speech
              text={practicetrading.current.outerText}
              startBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <PlayArrowIcon /> Click to Hear
                </Button>
              }
              stopBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <StopIcon /> Stop
                </Button>
              }
            />
          </Box>
        </div>
        <div>
          <Box ref={managerisk} sx={LearnContentClasses.learnread}>
            <Typography variant="h5" sx={{ fontWeight: "bolder" }}>
              How to Manage Risk
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    When up and running with real money, you need to address
                    position and risk management. Each position carries a
                    holding period and technical parameters that favor profit
                    and loss targets, requiring your timely exit when reached.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem
                sx={{ marginTop: "30px", lineHeight: "45px", fontSize: "20px" }}
              >
                <ListItemText>
                  <Typography variant="p">
                    Risk management techniques will vary in complexity and will
                    depend on your particular strategy, but there are some
                    overall tips. Know your entry and exit points and stick to
                    them, unless you have a good and objective reason to change
                    them. Set stop-losses and take-profit orders accordingly.
                    Cut losses early and avoid the emotional or psychological
                    urge to take on ever greater risk in hopes of breaking even.
                    More importantly, don't panic.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    If you're building a long-term buy-and-hold portfolio,
                    diversification can lower your overall risk without
                    sacrificing expected return. Also think about when to
                    rebalance your portfolio as markets move over time.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem sx={{ marginTop: "30px" }}>
                <ListItemText>
                  <Typography
                    variant="p"
                    sx={{ lineHeight: "45px", fontSize: "20px" }}
                  >
                    If you haven't done so already, now is the time to start a
                    daily journal that documents all of your trades, including
                    the reasons for taking risks, as well as the holding periods
                    and final profit or loss numbers. This diary of events and
                    observations sets the foundation for a trading edge that
                    will end your novice status and let you take money out of
                    the market on a consistent basis.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Speech
              text={managerisk.current.outerText}
              startBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <PlayArrowIcon /> Click to Hear
                </Button>
              }
              stopBtn={
                <Button
                  variant="outlined"
                  sx={{
                    color: "white",
                    width: "250px",
                    height: "45px",
                    margin: "50px",
                    borderRadius: "15px",
                    background:
                      "linear-gradient(69.9deg, rgb(76, 79, 106) 3.2%, rgb(118, 124, 163) 97.6%)",
                    "@media (max-width:1000px)": {
                      width: "200px",
                    },
                  }}
                >
                  <StopIcon /> Stop
                </Button>
              }
            />
          </Box>
        </div>
        <div>
          <Box sx={LearnContentClasses.learnread}>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              What Are the Main Differences Between Trading and Investing?
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "45px", fontSize: "20px" }}
            >
              Major differences between trading and investing include (a)
              investing time horizon: this can span years or decades because the
              objective is long-term wealth accumulation, while trading involves
              much shorter time spans, ranging from less than a day to a few
              months; (b) number of trades: because investing generally means
              buy and hold, the number of trades is usually much lower than in
              trading, where frequent trades are the norm; and (c) type of
              trades: investing typically involves long positions only, while
              trading may include long and short positions to benefit from both
              higher and lower market moves.
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "50px", fontWeight: "bolder" }}
            >
              What Are Some Common Trading Strategies?
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "45px", fontSize: "20px" }}
            >
              Common trading strategies include following the trend, or buying
              when the market is rising and short selling when it is declining;
              contrarian trading, or going against the herd; scalping, which
              involves exploiting minute price gaps caused by the bid-ask
              spread; and trading the news.
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "50px", fontWeight: "bolder" }}
            >
              Is Technical Analysis or Fundamental Analysis More Important for
              Trading?
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "45px", fontSize: "20px" }}
            >
              Because technical analysis looks at the short-term picture and can
              help you to identify short-term trading patterns and trends, it is
              better suited to trading than fundamental analysis, which takes a
              longer-term view.
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "50px", fontWeight: "bolder" }}
            >
              What Traits Are Necessary to Become a Successful Trader?
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "45px", fontSize: "20px" }}
            >
              In addition to knowledge and experience, the most important traits
              for a trader are discipline and mental fortitude. Discipline is
              necessary to stick to one's trading strategy in the face of daily
              challenges; without trading discipline, small losses can turn into
              huge ones. Mental fortitude is required to bounce back from the
              inevitable setbacks and bad trading days that will occur in every
              trader's career. Trading acumen is another requisite trait for
              trading success, but that can be developed over the years through
              knowledge and experience.
            </Typography>
            <Typography
              variant="h6"
              sx={{ marginTop: "50px", fontWeight: "bolder" }}
            >
              The Bottom Line{" "}
            </Typography>
            <Typography
              variant="p"
              sx={{ lineHeight: "45px", fontSize: "20px" }}
            >
              Start your trading journey with a deep education on the financial
              markets and then read charts and watch price actions, building
              strategies based on your observations. Test these strategies with
              paper trading, while analyzing results and making continuous
              adjustments. Then complete the first leg of your journey with
              monetary risk that forces you to address trade management and
              market psychology issues.
            </Typography>
          </Box>
        </div>
      </Box>
    </Box>
  );
}

export default ContentLearn;
