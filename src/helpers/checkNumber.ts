import { formatValue } from './formatValue';

export const checkNumber = (value: number) => {
  return formatValue(value >= 0 && value < 10, value);
};
