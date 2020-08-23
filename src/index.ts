import { checkString, checkNumber } from './helpers';

function twoDigit(value: string): string;
function twoDigit(value: number): number | string;
function twoDigit<T>(value: T): T;

function twoDigit(value: any) {
  if (typeof value === 'string') {
    return checkString(value);
  } else if (typeof value === 'number') {
    return checkNumber(value);
  }

  return value;
}

export default twoDigit;
