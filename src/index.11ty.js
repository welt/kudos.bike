/**
 * Homepage template.
 */
import eventInfo from "./_includes/eventInfo.js";
import navSecondary from "./_includes/navSecondary.js";
import sortBy from "./_lib/sortBy.js";

export default class Home {
  get data() {
    return {
      layout: "default",
      title: "Kudos Time Trial Series 2022",
      metaDescription:
        "Kudos Time Trial Series: supported by Bioracer (UK) and Cycle-Space Disley. Team and individual competitions, open to riders outside Manchester CTT region.",
      styles: "hide-bg",
    };
  }

  static getRaces(events) {
    return (
      Array.isArray(events) &&
      events.sort(sortBy("id", "ASC")).map(eventInfo).join("\n")
    );
  }

  render() {
    return `
      <h2> Congratulations to all the prize winners,<br>they are as follows:</h2>
      <div class="grid-results">
        <div class="grid-results__item">
          <h3>Women</h3>
          <ol>
            <li>1st Tracey Gregory</li>
            <li>2nd Liz Batt</li>
            <li>3rd Gail Lowe</li>
          </ol>
        </div>
        <div class="grid-results__item">
          <h3>Men</h3>
          <ol>
            <li>1st Alistair Ribbands</li>
            <li>2nd Rueben Corlett</li>
            <li>3rd Jimmy Froggatt</li>
          </ol>
        </div>
      </div>
      <h3>Team prize goes to Congleton CC.</h3>
      ${navSecondary()}
    `;
  }
}
