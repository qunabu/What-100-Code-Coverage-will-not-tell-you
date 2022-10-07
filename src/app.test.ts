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

jest.mock("node-fetch", () => require("fetch-mock-jest").sandbox());

const mockData = require("./mock.json");
const fetchMock = fetch as unknown as FetchMockStatic;

describe("conversion endpoint", () => {
  beforeEach(() => {
    fetchMock.get("http://www.floatrates.com/daily/usd.json", mockData);
  });
  afterEach(() => {
    fetchMock.reset();
  });
  test("converting gbp to pln", async () => {
    await request(app)
      .get("/convert/gbp/pln/100")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBeCloseTo(550.05);
      });
  });

  test("converting usd to pln", async () => {
    await request(app)
      .get("/convert/usd/pln/100")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBeCloseTo(486.28);
      });
  });

  test("converting usd to usd", async () => {
    await request(app)
      .get("/convert/usd/usd/100")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(100);
      });
  });

  test("converting out of range amount", async () => {
    await request(app)
      .get("/convert/usd/usd/0")
      .expect(200)
      .then((response) => {
        expect(response.body.result).toBe(-1);
      });
  });
});

beforeAll(() => {});

afterAll(() => {
  server.close();
});
