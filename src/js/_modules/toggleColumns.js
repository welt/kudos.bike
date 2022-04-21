/**
 * Show/hide event points columns.
 */

const toggleId = 'js-hide-columns';

export default class ToggleColumns {
  constructor() {
    this.toggleButton = null;
    this.table = null;
  }

  setState() {
    this.table.classList.toggle('hide-columns');
    const currentLabel = this.toggleButton.textContent;
    this.toggleButton.textContent = this.toggleButton.dataset.label;
    this.toggleButton.dataset.label = currentLabel;
    this.toggleButton
      .setAttribute(
        'aria-expanded',
        (this.toggleButton.getAttribute('aria-expanded') === 'false')
          ? 'true'
          : 'false',
      );
  }

  bindEvents() {
    this.toggleButton.addEventListener('click', this.setState.bind(this));
  }

  init() {
    const toggleButton = document.getElementById(toggleId);
    if (toggleButton) {
      this.toggleButton = toggleButton;
      this.table = toggleButton.nextElementSibling;
      this.bindEvents();
    }
  }
}
