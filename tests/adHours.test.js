import { jest } from "@jest/globals";
import addHours from "../src/_lib/addHours";

describe("addHours function", () => {
  test("it adds 2 hours to the date", () => {
    const date = new Date("2023-01-01T00:00:00Z");
    const result = addHours(date, 2);

    expect(result).toBe(new Date("2023-01-01T02:00:00Z").toString());
  });

  test("it adds 0 hours to the date", () => {
    const date = new Date("2023-01-01T00:00:00Z");
    const result = addHours(date, 0);

    expect(result).toBe(new Date("2023-01-01T00:00:00Z").toString());
  });

  test("it adds negative hours to the date", () => {
    const date = new Date("2023-01-01T00:00:00Z");
    const result = addHours(date, -2);

    expect(result).toBe(new Date("2022-12-31T22:00:00Z").toString());
  });
});
