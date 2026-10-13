export const analyze = (rawText) => {
  const text = (rawText || "").toLowerCase().trim();

  if (text.includes("investsimulator") || text.includes("simulator") || text.includes("paper")) {
    return "The MarketWise Investment Simulator allows you to simulate portfolio allocations and test performance hypotheses against real-world assets without capital risk. Head over to the Simulator tab in the navigation bar to start testing!";
  }

  if (text.includes("heatmap") || text.includes("liquidity")) {
    return "MarketWise Heatmaps visualize asset momentum and liquidity clustering across crypto tokens and major equities. They allow you to instantly spot where volume and market interest are concentrated.";
  }

  if (text.includes("crypto") || text.includes("bitcoin") || text.includes("btc") || text.includes("eth")) {
    return "Our Cryptocurrency hub provides live tick-by-tick prices, 24h & 7d percentage changes, and interactive charting for top digital assets. Check the Cryptocurrency page from the Markets menu!";
  }

  if (text.includes("stock") || text.includes("equity") || text.includes("nasdaq") || text.includes("nyse")) {
    return "We aggregate real-time equity data, exchange listings, and corporate dividend streams across major global exchanges. Explore the Stocks tab for deep coverage.";
  }

  if (text.includes("price") || text.includes("plan") || text.includes("cost") || text.includes("subscri")) {
    return "MarketWise offers flexible tiers including Free Starter, Pro Trader, and Institutional tiers. Visit our Pricing page to compare features!";
  }

  if (text.includes("learn") || text.includes("education") || text.includes("course") || text.includes("acad")) {
    return "Visit our Trading Academy under 'Tools & Learn' for curated educational tracks covering technical indicators, chart patterns, and risk management strategies.";
  }

  if (text.includes("hi") || text.includes("hello") || text.includes("hey")) {
    return "Hello! I am your MarketWise AI Assistant. You can ask me about our crypto markets, stock tickers, heatmaps, simulation tools, or platform features. How can I help you today?";
  }

  return "I'm your MarketWise Market Assistant. You can ask me questions about Cryptocurrencies, Stock Exhanges, Market Heatmaps, the Investment Simulator, or Trading Academy. What would you like to explore?";
};
