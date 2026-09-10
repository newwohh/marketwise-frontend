# MarketWise

MarketWise is a React app that allows you to track the prices of cryptocurrencies, forex, and stocks. It provides real-time data and charts, so you can stay up-to-date on the latest market movements.

To use MarketWise, simply enter the symbols of the assets you want to track. The app will then display a live chart of the prices. You can also view historical data, news, and analysis for each asset.

MarketWise is a powerful tool for anyone who wants to stay ahead of the market. It is easy to use and provides a wealth of information.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Features

Real-time data and charts for cryptocurrencies, forex, and stocks
Historical data, news, and analysis for each asset,
Customizable charts,
Alerts for price changes,
Heatmap,
Blogs,
Invest Simulator,
Ticker Subscription,
Premium,
Short Guide,
Chat Support

## Getting started

Use Node.js 20.19+ (20.x) or 22.12+; a supported LTS release is recommended.

```sh
npm ci
npm start
```

Open http://localhost:3000. The separate backend is expected at
http://127.0.0.1:5050/ (`src/constants/constants.js`).

```sh
npm run build    # production files in build/
npm run preview  # preview the production build
npm test         # Node.js regression tests
npm audit        # check all dependencies, including development tools
```

The frontend uses Vite. Configure production hosting to serve `index.html`
for client-side routes. API-dependent features require the backend and
working third-party API access.

## Dependency maintenance

The September 2026 update moves to React/React DOM 19.3, React Router 7,
Redux Toolkit 2, and Vite 8. Swiper replaces the React 18-only carousel;
the hero text uses a CSS animation. Unused dependencies were removed.

The full npm audit went from 82 findings (6 critical, 36 high, 24 moderate,
16 low) to zero, including development dependencies. Run `npm audit` again
as new advisories are published. MUI remains on 5.18 and the speech component
on 0.4.5 to preserve their current APIs; these are not their latest majors.
The retained MUI/storage dependencies still emit deprecation notices.

Build and regression tests pass. Browser checks cover FAQ interaction,
the education page, and carousels with mocked market responses; they do not
validate live backend services or third-party credentials.
