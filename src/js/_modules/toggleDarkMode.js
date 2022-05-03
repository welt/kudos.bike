/* eslint-disable no-underscore-dangle */
/**
 * Toggles 'dark-mode' CSS.
 */

export default class ToggleDarkMode {
  static setMode(event) {
    if ('checked' in event.detail) {
      document.documentElement.classList.toggle('dark-mode');
      const mode = (document.documentElement.classList.contains('dark-mode'))
        ? 'dark'
        : 'light';
      localStorage.setItem('mode', mode);
    }
  }

  bindEvents() {
    document.addEventListener('toggle', this.constructor.setMode.bind(this));
  }

  init() {
    this.bindEvents();
  }
}
