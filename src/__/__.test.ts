import { __ } from './__';

describe('R.__', () => {
  test('basic', () => {
    expect(__).toMatchInlineSnapshot(`
      Object {
        "@@functional/placeholder": true,
      }
    `);
  });
});
