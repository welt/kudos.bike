import { jest } from "@jest/globals";
import sortBy from "../src/_lib/sortBy";

describe("test array sorting function", () => {
  test("it sorts array of objects by given property in ascending order", () => {
    const arr = [{ name: "John" }, { name: "Jane" }, { name: "Doe" }];
    const sortedArr = arr.sort(sortBy("name", "ASC"));

    expect(sortedArr).toEqual([
      { name: "Doe" },
      { name: "Jane" },
      { name: "John" },
    ]);
  });

  test("it sorts array of objects by given property in descending order", () => {
    const arr = [{ name: "John" }, { name: "Jane" }, { name: "Doe" }];
    const sortedArr = arr.sort(sortBy("name", "DESC"));

    expect(sortedArr).toEqual([
      { name: "John" },
      { name: "Jane" },
      { name: "Doe" },
    ]);
  });

  test("it sorts array of objects by given property in ascending order by default", () => {
    const arr = [{ name: "John" }, { name: "Jane" }, { name: "Doe" }];
    const sortedArr = arr.sort(sortBy("name", "£@~FOO-nonsense+=$&%*"));

    expect(sortedArr).toEqual([
      { name: "Doe" },
      { name: "Jane" },
      { name: "John" },
    ]);
  });
});
