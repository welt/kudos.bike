module.exports = {
  /**
   * Trait for 11ty JS templates.
   * Loops through event key-value pairs in a result object to give event
   * result columns special formatting.
   *
   * @param {object} obj - result data object.
   * @param {bool} th - should output as th headers markup true/false.
   * @returns {string}
   */
  formatPointsColumns(obj, th = false) {
    const columns = [];
    for (const [key, value] of Object.entries(obj)) {
      if (key.includes("Event-")) {
        let label = key.replace("Event-", "");
        label = label.includes("cancelled") ? "\u2014" : label;
        if (th) {
          columns.push(`<th scope="col" class="points js-cols">${label}</th>`);
        } else {
          columns.push(
            `<td data-label="Event ${label}" class="points js-cols">${value}</td>`,
          );
        }
      }
    }
    return columns.join("\n");
  },
};
