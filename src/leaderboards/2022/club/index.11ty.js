import Leaderboard from "../../../_includes/leaderboard.js";
import isTied from "../../../_lib/isTied.js";
import navSecondary from "../../../_includes/navSecondary.js";
import ordinalSuffixOf from "../../../_lib/ordinalSuffixOf.js";
import tableKey from "../../../_includes/tableKey.js";

export default class Results extends Leaderboard {
  get data() {
    return {
      title: "Kudos TT Series, 2021 club leaderboard",
      metaDescription: "Kudos Time Trial Series, 2021 club leaderboard",
      styles: "hide-bg",
    };
  }

  /**
   * Gets the first event object and sends it to the formatPointsColumns()
   * to use its object keys as table column headers for all the others.
   *
   * @param {object} obj - results object (table row)
   * @returns {string}
   */
  formatPointsColumnHeaders(obj) {
    const { results } = obj;
    const [firstResult] = results;
    return `${this.formatPointsColumns(firstResult, true)}`;
  }

  formatResults(obj) {
    const { results } = obj;
    // eslint-disable-next-line no-unused-vars
    return results
      .map(
        (result, index, arr) => `
      <tr>
        <td data-label="Club" class="club" data-ordinal="${ordinalSuffixOf(result.Position)}${isTied(result.Position, index, arr)}">${result.Club}</td>
        ${this.formatPointsColumns(result)}
        <td data-label="Total Points" class="total-points">${result.TotalPoints}</td>
      </tr>
    `,
      )
      .join("\n");
  }

  render(data) {
    return `
      ${navSecondary()}
      <button aria-controls="results-table" aria-expanded="false" id="js-hide-columns" data-label="Hide events" class="btn-hide-columns" type="button">Show events</button>
      <table aria-live="polite" id="results-table" class="table-responsive hide-columns">
        <caption>Club Competition Results</caption>
        <thead>
          <tr>
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
