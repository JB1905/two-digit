const formatString = (value: string) => {
  if (Number(value).toString() === value) {
    return value.length === 1 ? `0${value}` : value;
  }

  return value;
};

const formatNumber = (value: number) => {
  return value >= 0 && value < 10 ? `0${value}` : value;
};

function twoDigit(value: string): string;
function twoDigit(value: number): number | string;
function twoDigit<T>(value: T): T;

function twoDigit(value: any) {
  if (typeof value === 'string') {
    return formatString(value);
  } else if (typeof value === 'number') {
    return formatNumber(value);
  }

  return value;
}

export default twoDigit;
