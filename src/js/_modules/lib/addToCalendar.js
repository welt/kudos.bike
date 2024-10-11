/**
 * Generates add-to-calendar URLs for event data supplied.
 * services = iCal, Google, Outlook.
 * event = { startsAt, endsAt, name, details, location }
 *
 * @exports makeUrls(event)
 */
const makeTime = (time) =>
  new Date(time).toISOString().replace(/[-:]|\.\d{3}/g, "");

const makeUrl = (base, query) =>
  Object.keys(query).reduce((accum, key, index) => {
    const value = query[key];
    if (value !== null) {
      return `${accum}${index === 0 ? "?" : "&"}${key}=${encodeURIComponent(value)}`;
    }
    return accum;
  }, base);

const makeGoogleCalendarUrl = (event) =>
  makeUrl("https://calendar.google.com/calendar/render", {
    action: "TEMPLATE",
    dates: `${makeTime(event.startsAt)}/${makeTime(event.endsAt)}`,
    location: event.location,
    text: event.name,
    details: event.details,
  });

const makeOutlookCalendarUrl = (event) =>
  makeUrl("https://outlook.live.com/owa", {
    rru: "addevent",
    startdt: makeTime(event.startsAt),
    enddt: makeTime(event.endsAt),
    subject: event.name,
    location: event.location,
    body: event.details,
    allday: false,
    uid: new Date().getTime().toString(),
    path: "/calendar/view/Month",
  });

const makeICalCalendarUrl = (event) => {
  const components = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "BEGIN:VEVENT",
    `URL:${document.URL}`,
    `DTSTART:${makeTime(event.startsAt)}`,
    `DTEND:${makeTime(event.endsAt)}`,
    `SUMMARY:${event.name}`,
    `DESCRIPTION:${event.details}`,
    `LOCATION:${event.location}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return encodeURI(`data:text/calendar;charset=utf8,${components.join("\n")}`);
};

const makeUrls = (event) => ({
  iCal: makeICalCalendarUrl(event),
  Google: makeGoogleCalendarUrl(event),
  Outlook: makeOutlookCalendarUrl(event),
});

export default makeUrls;
