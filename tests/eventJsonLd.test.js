import { jest } from "@jest/globals";
import addHours from "../src/_lib/addHours";
import eventJsonLd from "../src/_lib/eventJsonLd";

describe("eventJsonLd function", () => {
  test("it generates correct JSON-LD microdata string for events", () => {
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

    const expected = `
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Bioracer (UK) Manchseter CTT Kudos Series Event 1",
    "startDate": "05/03/2022, 14:00:00",
    "endDate": "Sat Mar 05 2022 18:00:00 GMT+0000 (Greenwich Mean Time)",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "Manchester & District TTA, J4/20",
    "location": {
      "@type": "Place",
      "name": "J4/20",
      "address": "Byley - A50 Cranage - B5081 Toft - Allostock",
      "branchCode": "23800"
    },
    "organizer": {
      "@type": "Organization",
      "name": "CTT",
      "url": "https://cyclingtimetrials.org.uk/"
    }
  }
</script>`;

    expect(eventJsonLd(event)).toBe(expected);
  });
});
