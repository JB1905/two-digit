import twoDigit from '../src';

describe('twoDigit', () => {
  it.each`
    input               | expected
    ${5}                | ${'05'}
    ${15}               | ${'15'}
    ${120}              | ${'120'}
    ${2.51}             | ${'02.51'}
    ${Math.PI}          | ${'03.141592653589793'}
    ${-1}               | ${'-1'}
    ${'2'}              | ${'02'}
    ${'04'}             | ${'04'}
    ${'10'}             | ${'10'}
    ${'204'}            | ${'204'}
    ${'2.1.3'}          | ${'2.1.3'}
    ${0b111}            | ${'07'}
    ${0b1100}           | ${0b1100 /* 12 */}
    ${0o5}              | ${'05'}
    ${0o12}             | ${0o12 /* 10 */}
    ${0x8}              | ${'08'}
    ${0xf2}             | ${0xf2 /* 242 */}
    ${'J'}              | ${'J'}
    ${'Hello World!'}   | ${'Hello World!'}
    ${{ name: 'John' }} | ${{ name: 'John' }}
    ${Infinity}         | ${'Infinity'}
    ${null}             | ${null}
  `('should convert $input to $expected', ({ input, expected }) => {
    const value = twoDigit(input);

    expect(value).toStrictEqual(expected);
  });
});
