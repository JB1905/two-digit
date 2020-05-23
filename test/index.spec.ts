import twoDigit from '../src';

describe('twoDigit', () => {
  it('should return string with two-digit for one-digit number', () => {
    const input = 5;

    const value = twoDigit(input);

    expect(value).toBe('05');
  });

  it('should return number with two-digit for two-digit number', () => {
    const input = 15;

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return string with two-digit for floating point number', () => {
    const input = 3.14;

    const value = twoDigit(input);

    expect(value).toBe('03.14');
  });

  it('should return inputted number with three-digit', () => {
    const input = 120;

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return string with two-digit for one-digit string', () => {
    const input = '2';

    const value = twoDigit(input);

    expect(value).toBe('02');
  });

  it('should return inputted string with two-digit', () => {
    const input = '10';

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return inputted string with three-digit', () => {
    const input = '204';

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return inputted negative number', () => {
    const input = -1;

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return inputted letter', () => {
    const input = 'J';

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return inputted text', () => {
    const input = 'Hello World!';

    const value = twoDigit(input);

    expect(value).toBe(input);
  });

  it('should return inputted unsupported type value', () => {
    const input = { name: 'John' };

    const value = twoDigit(input);

    expect(JSON.stringify(value)).toBe(JSON.stringify(input));
  });

  it('should return inputted Infinity value', () => {
    const input = Infinity;

    const value = twoDigit(input);

    expect(value).toBe(input);
  });
});
