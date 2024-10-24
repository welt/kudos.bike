import { jest } from "@jest/globals";
import addHours from "../src/_lib/addHours";
import eventData from "../src/_lib/eventData";

describe("eventData function", () => {
  test("it generates correct JSON for calendar view", () => {
    const event = {
      id: 1,
      Event: "Event 1",
      Date: "2022-03-05T14:00:00+0000",
      Name: "Manchester & District TTA",
      Course: "J4/20",
      CourseInfo: "Byley - A50 Cranage - B5081 Toft - Allostock",
      Distance: "10 miles",
      ClosingDate: "2022-02-22T23:59:00+0000",
      Price: "11.00",
      EventDetails: "https://www.cyclingtimetrials.org.uk/race-details/23800",
    };

    const expected = JSON.stringify({
      details: "Bioracer (UK) Kudos Series Race 1",
      endsAt: "Sat Mar 05 2022 18:00:00 GMT+0000 (Greenwich Mean Time)",
      location: "J4/20",
      name: "Manchester & District TTA",
      startsAt: "2022-03-05T14:00:00+0000",
    });

    expect(eventData(event)).toBe(expected);
  });
});
