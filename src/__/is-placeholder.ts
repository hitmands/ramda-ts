import { FunctionalPlaceholder } from './__';

/**
 * @private
 */
export const isPlaceholder = (arg: any): arg is FunctionalPlaceholder => arg?.['@@functional/placeholder'] === true;
