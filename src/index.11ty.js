/* eslint-disable class-methods-use-this */
const eventInfo = require('./_includes/eventInfo');
const navSecondary = require('./_includes/navSecondary');
// const menuResults = require('./_includes/menuResults');
const sortBy = require('./_lib/sortBy');

class Home {
  get data() {
    return {
      layout: 'default',
      title: 'Kudos Time Trial Series 2022',
      metaDescription: 'Kudos Time Trial Series: supported by Bioracer (UK) and Cycle-Space Disley. Team and individual competitions, open to riders outside Manchester CTT region.',
      styles: 'hide-bg',
    };
  }

  static getRaces(events) {
    return Array.isArray(events)
      && events.sort(sortBy('id', 'ASC')).map(eventInfo).join('\n');
  }

  render(data) {
    const { events } = data;
    return `
      ${navSecondary()}
      <h3>Events calendar</h3>
      ${this.constructor.getRaces(events)}
    `;
  }
}

module.exports = Home;
