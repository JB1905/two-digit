import twoDigit from '../src';

describe('one-digit number', () => {
  const input = 5;

  const value = twoDigit(input);

  it('should return string with two-digit', () => {
    expect(value).toBe('05');
  });
});

describe('two-digit number', () => {
  const input = 15;

  const value = twoDigit(input);

  it('should return number with two-digit', () => {
    expect(value).toBe(input);
  });
});

describe('floating point number', () => {
  const input = 3.14;

  const value = twoDigit(input);

  it('should return string with two-digit for floating point number', () => {
    expect(value).toBe('03.14');
  });
});

describe('three-digit number', () => {
  const input = 120;

  const value = twoDigit(input);

  it('should return number with three-digit', () => {
    expect(value).toBe(input);
  });
});

describe('one-digit string', () => {
  const input = '2';

  const value = twoDigit(input);

  it('should return string with two-digit', () => {
    expect(value).toBe('02');
  });
});

describe('two-digit string', () => {
  const input = '10';

  const value = twoDigit(input);

  it('should return string with two-digit', () => {
    expect(value).toBe(input);
  });
});

describe('three-digit string', () => {
  const input = '204';

  const value = twoDigit(input);

  it('should return string with three-digit', () => {
    expect(value).toBe(input);
  });
});

describe('negative number', () => {
  const input = -1;

  const value = twoDigit(input);

  it('should return inputed value', () => {
    expect(value).toBe(input);
  });
});

describe('letter input', () => {
  const input = 'J';

  const value = twoDigit(input);

  it('should return inputed value', () => {
    expect(value).toBe(input);
  });
});

describe('text input', () => {
  const input = 'Hello World!';

  const value = twoDigit(input);

  it('should return inputed value', () => {
    expect(value).toBe(input);
  });
});

describe('unsupported type', () => {
  const input = { name: 'John' };

  const value = twoDigit(input);

  it('should return inputed value', () => {
    expect(JSON.stringify(value)).toBe(JSON.stringify(input));
  });
});

describe('Infinity value', () => {
  const input = Infinity;

  const value = twoDigit(input);

  it('should return inputed value', () => {
    expect(value).toBe(input);
  });
});
