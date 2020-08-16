import twoDigit from '../src';

describe('twoDigit', () => {
  it.each`
    input               | expected
    ${5}                | ${'05'}
    ${15}               | ${15}
    ${3.14}             | ${'03.14'}
    ${120}              | ${120}
    ${0b111}            | ${'07'}
    ${0b1100}           | ${0b1100 /* 12 */}
    ${0o5}              | ${'05'}
    ${0o12}             | ${0o12 /* 10 */}
    ${0x8}              | ${'08'}
    ${0xf2}             | ${0xf2 /* 242 */}
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
