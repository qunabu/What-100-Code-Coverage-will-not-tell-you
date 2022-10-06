import { describe, expect, test, afterAll } from "@jest/globals";
import request from "supertest";
import app, { server } from "./app";

describe("sum module", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});

describe("conversion endpoint", () => {
  test("converting gbp to pln", async () => {
    await request(app).get("/convert/gbp/pln/100").expect(200);
  });
});

afterAll(() => {
  server.close();
});
