/**
 * event info partial template.
 */
const eventData = require('../_lib/eventData');
const eventJsonLd = require('../_lib/eventJsonLd');

const isOld = (raceDateObj) => new Date() > raceDateObj;

module.exports = function eventInfo(data) {
  const event = ('event' in data) ? data.event : data;
  const raceHappened = isOld(new Date(event.Date));
  const cancelled = 'Cancelled' in event && event.Cancelled === true ? 'cancelled' : '';
  if (!raceHappened) {
    return `
     ${eventJsonLd(event)}
     <div id="event-${event.id}" class="event ${cancelled}" data-calendar-item='${eventData(event)}'>
       <p>${event.Event}${cancelled && ' - EVENT CANCELLED'}</p>
       <h2>${event.Name}</h2>
       <div class="event-details">
         <p><time datetime="${event.Date}">${new Date(event.Date).toDateString()}, ${new Date(event.Date).toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })}</time></p>
         <p>Course: ${event.Course} ${event.CourseInfo}</p>
         <p>Distance: ${event.Distance}</p>
         <p>Price: £${event.Price}</p>
         <p>Closing date for entries: ${new Date(event.ClosingDate).toDateString()}</p>
         <p>Details: ${(event.EventDetails) ? `<a class="event-link" href="${event.EventDetails}">${event.EventDetails}</a>` : ''}</p>
       </div>
     </div>
     `;
  }
  return '';
};
