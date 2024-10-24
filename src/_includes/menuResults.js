import sortBy from "../_lib/sortBy.js";

const makeMenu = (arr) =>
  Array.isArray(arr) &&
  arr
    .sort(sortBy("id", "ASC"))
    .map(
      (event) => `<li id="race-${event.id}">
  <a href="events/${event.id}/">${event.Name}</a>
</li>`,
    )
    .join("\n");

export default function menuResults(events) {
  return `
    <details title="Show race results">
    <summary><span class="summary">Race results, 2022</span></summary>
    <ul>
      ${makeMenu(events)}
    </ul>
  </details>
  `;
}
