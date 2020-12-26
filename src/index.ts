const formatValue = (value: string | number, isSingleDigit: boolean) => {
  return isSingleDigit ? `0${value}` : value;
};

const checkString = (value: string) => {
  if (Number(value).toString() === value) {
    return formatValue(value, value.length === 1);
  }

  return value;
};

const checkNumber = (value: number) => {
  return formatValue(value, value >= 0 && value < 10);
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
