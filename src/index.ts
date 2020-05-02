function twoDigit(value: string): string;
function twoDigit(value: number): number | string;
function twoDigit<T>(value: T): T;

function twoDigit(value: any) {
  if (typeof value === 'string') {
    if (Number(value).toString() === value) {
      return value.length === 1 ? `0${value}` : value;
    } else {
      return value;
    }
  } else if (typeof value === 'number') {
    return value >= 0 && value < 10 ? `0${value}` : value;
  } else {
    return value;
  }
}

export default twoDigit;
