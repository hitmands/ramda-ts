import { __ } from './__';
import { isPlaceholder } from './is-placeholder';

describe('is-placeholder', () => {
  test('basic', () => {
    expect(isPlaceholder(__)).toBe(true);
  });

  it('should support interoperability', () => {
    expect(isPlaceholder({ '@@functional/placeholder': true })).toBe(true);
  });

  it('should implement the proper interface', () => {
    expect(isPlaceholder({ '@@functional/placeholder': 'truthy-value' })).toBe(false);
  });
});
