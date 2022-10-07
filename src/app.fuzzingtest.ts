import {
  describe,
  expect,
  test,
  afterAll,
  beforeAll,
  jest,
  beforeEach,
  afterEach,
} from "@jest/globals";
import type { FetchMockStatic } from "fetch-mock";
import request from "supertest";
import app, { server } from "./app";
import fetch from "node-fetch";
import "fetch-mock-jest";

import Fuzz from "jest-fuzz";
//const Fuzz = require('jest-fuzz');

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());
jest.setTimeout(1000);
const mockData = require("./mock.json");
const fetchMock = fetch as unknown as FetchMockStatic;

describe("conversion endpoint fuzzing", () => {
  beforeEach(() => {
    fetchMock.get("http://www.floatrates.com/daily/usd.json", mockData);
  });
  afterEach(() => {
    fetchMock.reset();
  });

  const fuzzArr = Array.from({ length: 100 }).map(() => [
    Fuzz.string({ length: 3 })(),
    Fuzz.string({ length: 3 })(),
    Fuzz.int({
      min: -Number.MAX_SAFE_INTEGER,
      max: Number.MAX_SAFE_INTEGER,
    })(),
  ]);

  test.each(fuzzArr)(
    `converting %s to %s amount %d`,
    async (fromCurrCode, toCurrCode, amount) => {
      await request(app)
        .get(`/convert/${fromCurrCode}/${toCurrCode}/${amount}`)
        .expect(200);
    }
  );
});

afterAll(() => {
  server.close();
});
