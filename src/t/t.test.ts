import { T } from './t';

describe('R.T', () => {
  it('should just return true', () => {
    expect(T()).toStrictEqual(true);
  });

  it('should just return true and ignore any passed argument', () => {
    expect(T()).toStrictEqual(true);
    expect(T(1)).toStrictEqual(true);
    expect(T('hello', null, undefined)).toStrictEqual(true);
    expect(T('hello', null, undefined, [])).toStrictEqual(true);
    expect(T('hello', null, undefined, [], {})).toStrictEqual(true);
    expect(T({})).toStrictEqual(true);
  });
});
