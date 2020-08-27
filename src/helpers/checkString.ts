import { formatValue } from './formatValue';

export const checkString = (value: string) => {
  if (Number(value).toString() === value) {
    return formatValue(value.length === 1, value);
  }

  return value;
};
