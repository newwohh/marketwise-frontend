export const analyze = (text) => {
  if (text.toLowerCase().replaceAll(" ", "").includes("investsimulator"))
    return "An investment simulator is a software program that allows users to     practice investing without risking any real money. It does this by     giving users a virtual balance of money to invest, which they can   then use to buy and sell stocks, bonds, and other financial    instruments.";
  else if (text.toLowerCase().trim().includes("heatmap")) {
    return "Thanks for showing interest in one of our feature  The Heatmap is a way to determine where liquidity is in the market and how liquidity-providers are behaving. In other words, it helps traders to determine where the actual orders in the market are being made";
  } else {
    return " Check Spelling!";
  }
};
