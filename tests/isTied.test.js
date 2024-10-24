import { jest } from "@jest/globals";
import isTied from "../src/_lib/isTied";

describe("test isTied helper function which shows if a position is tied", () => {
  test("it returns equals symbol for a tie", () => {
    const positions = [
      { Position: 1 },
      { Position: 2 },
      { Position: 2 },
      { Position: 3 },
    ];

    const testCases = [
      { pos: 1, index: 0, expected: "" },
      { pos: 2, index: 1, expected: "=" },
      { pos: 2, index: 2, expected: "=" },
      { pos: 3, index: 3, expected: "" },
    ];

    testCases.forEach(({ pos, index, expected }) => {
      expect(isTied(pos, index, positions)).toBe(expected);
    });
  });
});
