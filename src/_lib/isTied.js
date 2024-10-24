/**
 * Util for adding '=' suffix to tied positions.
 *
 * @param {int} currentPOS - current position.
 * @param {int} index - current index.
 * @param {array} arr - array of positions.
 * @returns string
 */
export default function isTied(currentPOS, index, arr) {
  const nextResult = arr[index + 1] ?? {};
  const previousResult = arr[index - 1] ?? {};
  return currentPOS === previousResult?.Position ||
    currentPOS === nextResult?.Position
    ? "="
    : "";
}
