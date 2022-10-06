import {
  describe,
  expect,
  test,
  afterAll,
  beforeAll,
  jest,
  beforeEach,
} from "@jest/globals";
import type { FetchMockStatic } from "fetch-mock";
import request from "supertest";
import app, { server } from "./app";
import fetch from "node-fetch";
import "fetch-mock-jest";

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());

// Cast node-fetch as fetchMock so we can access the
// `.mock*()` methods

const mockData = require("./mock.json");

const fetchMock = fetch as unknown as FetchMockStatic;

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});

describe("conversion endpoint", () => {
  // beforeEach(async () => await fetchMock.reset());

  test("converting gbp to pln", async () => {
    fetchMock.get("http://www.floatrates.com/daily/usd.json", mockData);

    await request(app)
      .get("/convert/gbp/pln/100")
      .expect(200)
      .then((response) => {
        console.log(response.text);
      });
  });
});

beforeAll(() => {});

afterAll(() => {
  server.close();
});
