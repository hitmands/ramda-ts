export function F(...args: unknown[]): false;
export function F(): false;

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @see R.T
 * @example
 *
 *      R.F(); //=> false
 */
export function F() {
  return false;
}
