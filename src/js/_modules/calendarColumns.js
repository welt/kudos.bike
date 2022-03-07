/**
 * Client class to build & append calendar links.
 */
import makeUrls from './lib/addToCalendar';
import renderCalendarLinks from './lib/renderCalendarLinks';

/**
  * Element to append calendar link children to.
  */
const containerElement = '[data-calendar-item]';

export default class CalendarItem {
  constructor() {
    this.items = [];
  }

  /**
    * For each container element found, make & append the calendar child elements.
    */
  attachLinks() {
    for (let i = 0; i < this.items.length; i += 1) {
      renderCalendarLinks(
        this.items[i],
        makeUrls(JSON.parse(this.items[i].dataset.calendarItem)),
      );
    }
  }

  init() {
    const items = document.querySelectorAll(containerElement);
    if (items.length) {
      this.items = [...items];
      this.attachLinks();
    }
  }
}
