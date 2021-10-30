export function T(...args: unknown[]): true;
export function T(): true;

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @see R.F
 * @example
 *
 *      R.T(); //=> true
 */
export function T() {
  return true;
}
