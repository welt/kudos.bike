/**
 * Comparison function for sorting JSON array objects by property.
 *
 * @param {string} prop - property to sort by.
 * @param {string} order - order ASCending or DESCending.
 * @returns {number}
 */

module.exports = function sortBy(prop, order = "ASC") {
  const _order = order === "DESC" ? -1 : 1;
  return (a, b) => {
    if (a[prop] > b[prop]) {
      return 1 * _order;
    }
    if (a[prop] < b[prop]) {
      return -1 * _order;
    }
    return 0;
  };
};
