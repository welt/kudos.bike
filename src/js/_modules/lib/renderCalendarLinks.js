/**
 * Generates HTML links from object of calendar service names vs. URLs.
 * Appends HTML to container element.
 *
 * @param {DOM Element} elem - Element to append links to.
 * @param {object} linksObj - Object of calendar service names : service URLs.
 */
export default function renderCalendarLinks(elem, linksObj) {
  const wrap = document.createElement("aside");
  const wrapTitle = document.createElement("p");
  wrapTitle.className = "calendar-links__title";
  const wrapLabel = document.createTextNode("Add event to your calendar");
  wrapTitle.appendChild(wrapLabel);
  wrap.appendChild(wrapTitle);
  const linkContainer = document.createElement("div");
  linkContainer.className = "calendar-links";
  wrap.className = "add-to-calendar";
  for (const [key, value] of Object.entries(linksObj)) {
    const anchor = document.createElement("a");
    anchor.className = "calendar-link";
    anchor.setAttribute("href", value);
    anchor.setAttribute("download", key);
    const label = document.createTextNode(key);
    anchor.appendChild(label);
    linkContainer.appendChild(anchor);
  }
  wrap.appendChild(linkContainer);
  elem.appendChild(wrap);
}
