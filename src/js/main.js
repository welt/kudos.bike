/* eslint-disable import/extensions */
import * as a from './_modules/a';
import * as b from './_modules/b';
import CalendarItem from './_modules/calendarItem';
import ToggleColumns from './_modules/toggleColumns';

const c = new CalendarItem();
c.init();

const t = new ToggleColumns();
t.init();

a.hello();
b.goodbye();
