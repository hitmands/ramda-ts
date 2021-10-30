import { F } from './f';

describe('R.F', () => {
  it('should just return false', () => {
    expect(F()).toStrictEqual(false);
  });

  it('should just return false and ignore any passed argument', () => {
    expect(F()).toStrictEqual(false);
    expect(F(1)).toStrictEqual(false);
    expect(F('hello', null, undefined)).toStrictEqual(false);
    expect(F('hello', null, undefined, [])).toStrictEqual(false);
    expect(F('hello', null, undefined, [], {})).toStrictEqual(false);
    expect(F({})).toStrictEqual(false);
  });
});
