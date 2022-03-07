/**
 * Util for adding hours to JavaScript Date objects.
 *
 * @param {Date} date - Date object.
 * @param {int} h - number of hours to add to the dateTime.
 * @returns {Date}
*/
module.exports = function addHours(date, h) {
  // eslint-disable-next-line no-underscore-dangle
  const _date = new Date(date);
  _date.setTime(_date.getTime() + (h * 60 * 60 * 1000));
  return _date.toString();
};
