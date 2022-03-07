const sortBy = require('../_lib/sortBy');

const makeMenu = (arr) => Array.isArray(arr)
&& arr.sort(sortBy('id', 'ASC')).map((event) => `
<li id="race-${event.id}">
  <a href="events/${event.id}/">${event.Name}</a>
</li>
`).join('\n');

module.exports = function menuResults(events) {
  return `
    <details title="Show race results">
    <summary><span class="summary">Race results, 2022</span></summary>
    <ul>
      ${makeMenu(events)}
    </ul>
  </details>
  `;
};
