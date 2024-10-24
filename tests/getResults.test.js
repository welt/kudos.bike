import { jest } from "@jest/globals";
import getResults from "../src/_services/getResults";

describe("getResults service to fetch results from http API", () => {
  test("it should fetch race data", async () => {
    const mockData = { data: { race: "Race 1" } };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      }),
    );

    const data = await getResults(1);

    expect(data).toEqual(mockData.data);
  });

  test("it should handle fetch error", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        status: 404,
      }),
    );

    const data = await getResults(1);

    expect(data).toEqual({
      error: new Error("A Fetch error has occured: 404"),
    });
  });
});
