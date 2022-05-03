/* eslint-disable import/extensions */
import CalendarItem from './_modules/calendarItem';
import ToggleColumns from './_modules/toggleColumns';
import ToggleDarkMode from './_modules/toggleDarkMode';

const calendarItem = new CalendarItem();
calendarItem.init();

const toggleColumns = new ToggleColumns();
toggleColumns.init();

const toggleDarkMode = new ToggleDarkMode();
toggleDarkMode.init();
