/**
 * Generates string of JSON data from Race object supplied.
 * Assumes all the races are 4 hours long for the purposes of the calendar.
 */
const addHours = require('./addHours');

/**
 * eventData.js
 * @param {object} race - app Race object.
 * @returns {string}
 */
module.exports = function eventData(race) {
  return JSON.stringify({
    details: `Bioracer (UK) Kudos Series Race ${race.id}`,
    endsAt: `${addHours(race.Date, 4)}`,
    location: `${race.Course}`,
    name: `${race.Name}`,
    startsAt: `${race.Date}`,
  });
};
