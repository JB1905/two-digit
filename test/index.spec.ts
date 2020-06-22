import twoDigit from '../src';

describe('twoDigit', () => {
  it.each`
    input               | expected
    ${5}                | ${'05'}
    ${15}               | ${15}
    ${3.14}             | ${'03.14'}
    ${120}              | ${120}
    ${'2'}              | ${'02'}
    ${'10'}             | ${'10'}
    ${'204'}            | ${'204'}
    ${-1}               | ${-1}
    ${'J'}              | ${'J'}
    ${'Hello World!'}   | ${'Hello World!'}
    ${{ name: 'John' }} | ${{ name: 'John' }}
    ${Infinity}         | ${Infinity}
  `('should convert $input to $expected', ({ input, expected }) => {
    const value = twoDigit(input);

    expect(value).toStrictEqual(expected);
  });
});
