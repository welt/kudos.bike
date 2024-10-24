/**
 * Generates string of JSON-LD Structure data from Race object supplied.
 * Assumes all the races are 4 hours long for the purposes of the calendar.
 */
import addHours from "./addHours.js";

const getRaceCode = (url) => url.substring(url.lastIndexOf("/") + 1);

/**
 * eventJsonLd.js
 * @param {object} race - app Race object.
 * @returns {string}
 */
export default function eventJsonLd(race) {
  return `
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Bioracer (UK) Manchseter CTT Kudos Series ${race.Event}",
    "startDate": "${new Date(race.Date).toLocaleString("en-GB", { timeZone: "Europe/London" })}",
    "endDate": "${addHours(race.Date, 4)}",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "description": "${race.Name}, ${race.Course}",
    "location": {
      "@type": "Place",
      "name": "${race.Course}",
      "address": "${race.CourseInfo}",
      "branchCode": "${getRaceCode(race.EventDetails)}"
    },
    "organizer": {
      "@type": "Organization",
      "name": "CTT",
      "url": "https://cyclingtimetrials.org.uk/"
    }
  }
</script>`;
}
