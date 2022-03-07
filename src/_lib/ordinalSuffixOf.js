/**
 * Util for adding en-GB ordinal suffixes to integers.
 *
 * @param {int} i - integer to add ordinal suffix to.
 * @returns string
 */
module.exports = function ordinalSuffixOf(i) {
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
};
