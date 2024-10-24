import { jest } from "@jest/globals";
import ordinalSuffixOf from "../src/_lib/ordinalSuffixOf";

describe("test ordinal suffix calculation", () => {
  test("it returns correct en-GB ordinal suffix for a number", () => {
    expect(ordinalSuffixOf(1)).toBe("1st");
    expect(ordinalSuffixOf(2)).toBe("2nd");
    expect(ordinalSuffixOf(3)).toBe("3rd");
    expect(ordinalSuffixOf(4)).toBe("4th");
    expect(ordinalSuffixOf(11)).toBe("11th");
    expect(ordinalSuffixOf(12)).toBe("12th");
    expect(ordinalSuffixOf(13)).toBe("13th");
    expect(ordinalSuffixOf(21)).toBe("21st");
    expect(ordinalSuffixOf(22)).toBe("22nd");
    expect(ordinalSuffixOf(23)).toBe("23rd");
    expect(ordinalSuffixOf(101)).toBe("101st");
    expect(ordinalSuffixOf(111)).toBe("111th");
  });
});
