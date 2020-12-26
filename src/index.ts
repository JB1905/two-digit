const formatValue = (isSingleDigit: boolean, value: string | number) => {
  return isSingleDigit ? `0${value}` : value;
};

const checkString = (value: string) => {
  if (Number(value).toString() === value) {
    return formatValue(value.length === 1, value);
  }

  return value;
};

const checkNumber = (value: number) => {
  return formatValue(value >= 0 && value < 10, value);
};

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
