/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
const formatPointsColumns = require('../../../_lib/formatPointsColumns');
const isTied = require('../../../_lib/isTied');
const navSecondary = require('../../../_includes/navSecondary');
const ordinalSuffixOf = require('../../../_lib/ordinalSuffixOf');
const tableKey = require('../../../_includes/tableKey');

class Results {
  constructor() {
    Object.assign(this, formatPointsColumns);
  }

  get data() {
    return {
      title: 'Kudos TT Series, 2021 women\'s leaderboard',
      metaDescription: 'Kudos Time Trial Series, 2021 women\'s leaderboard',
      styles: 'hide-bg',
    };
  }

  formatPointsColumnHeaders(obj) {
    const { results } = obj;
    const [firstResult] = results;
    return `${this.formatPointsColumns(firstResult, true)}`;
  }

  formatResults(obj) {
    const { results } = obj;
    return results.map((result, index, arr) => `
      <tr>
        <td data-label="Name" class="name" data-ordinal="${ordinalSuffixOf(result.Position)}${isTied(result.Position, index, arr)}">${result.Firstname} ${result.Lastname}</td>
        <td data-label="Club" class="club">${result.Club}</td>
        ${this.formatPointsColumns(result)}
        <td data-label="Total Points" class="total-points">${result.TotalPoints}</td>
      </tr>
    `)
      .join('\n');
  }

  render(data) {
    return `
      ${navSecondary()}
      <button aria-controls="results-table" aria-expanded="false" id="js-hide-columns" data-label="Hide events" class="btn-hide-columns" type="button">Show events</button>
      <table aria-live="polite" id="results-table" class="table-responsive hide-columns">
        <caption>Women's Competition Results</caption>
        <thead>
          <tr>
           <th scope="col" class="name">Name</th>
           <th scope="col" class="club">Club</th>
           ${this.formatPointsColumnHeaders(data)}
           <th scope="col" class="points">Total Points</th>
          </tr>
        </thead>
        ${this.formatResults(data)}
      </table>
      ${tableKey()}
    `;
  }
}

module.exports = Results;
