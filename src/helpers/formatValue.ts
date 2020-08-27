export const formatValue = (condition: boolean, value: string | number) => {
  return condition ? `0${value}` : value;
};
