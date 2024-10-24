/**
 * Util for adding hours to JavaScript Date objects.
 *
 * @param {Date} date - Date object.
 * @param {int} h - number of hours to add to the dateTime.
 * @returns {Date}
 */
export default function addHours(date, h) {
  const dateObj = new Date(date);
  dateObj.setTime(dateObj.getTime() + h * 60 * 60 * 1000);
  return dateObj.toString();
}
