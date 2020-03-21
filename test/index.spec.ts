import twoDigit from '../src';

describe('one-digit number', () => {
  const value = twoDigit(5);

  it('should return string with two-digit', () => {
    expect(value).toBe('05');
  });
});

describe('two-digit number', () => {
  const value = twoDigit(15);

  it('should return number with two-digit', () => {
    expect(value).toBe(15);
  });
});

describe('floating point number', () => {
  const value = twoDigit(3.14);

  it('should return string with two-digit for floating point number', () => {
    expect(value).toBe('03.14');
  });
});

describe('three-digit number', () => {
  const value = twoDigit(120);

  it('should return number with three-digit', () => {
    expect(value).toBe(120);
  });
});

describe('one-digit string', () => {
  const value = twoDigit('2');

  it('should return string with two-digit', () => {
    expect(value).toBe('02');
  });
});

describe('two-digit string', () => {
  const value = twoDigit('10');

  it('should return string with two-digit', () => {
    expect(value).toBe('10');
  });
});

describe('three-digit string', () => {
  const value = twoDigit('204');

  it('should return string with three-digit', () => {
    expect(value).toBe('204');
  });
});

describe('negative number', () => {
  const value = twoDigit(-1);

  it('should return inputed value', () => {
    expect(value).toBe(-1);
  });
});

describe('letter input', () => {
  const value = twoDigit('J');

  it('should return inputed value', () => {
    expect(value).toBe('J');
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
    expect(value).toBe(Infinity);
  });
});
