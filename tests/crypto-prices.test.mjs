import assert from "node:assert/strict";
import { test } from "node:test";
import store from "../src/store/store.js";
import { getCryptoPrice } from "../src/reducers/reducers.js";

test("crypto prices use browser fetch and update the Redux store", async (t) => {
  const prices = Array.from({ length: 20 }, (_, i) => ({ id: `coin-${i}` }));
  const fetchMock = t.mock.method(globalThis, "fetch", async (url) => {
    assert.equal(url, "https://api.coinpaprika.com/v1/ticker");
    return { ok: true, json: async () => prices };
  });
  await store.dispatch(getCryptoPrice());
  assert.deepEqual(store.getState().marketwise.prices, prices.slice(0, 17));
  assert.equal(fetchMock.mock.callCount(), 1);

  fetchMock.mock.mockImplementation(async () => ({ ok: false, status: 503 }));
  const log = t.mock.method(console, "log", () => {});
  await store.dispatch(getCryptoPrice());
  assert.match(log.mock.calls[0].arguments[0].message, /503/);
});
