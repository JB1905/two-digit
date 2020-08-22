export const formatString = (value: string) => {
  if (Number(value).toString() === value) {
    return value.length === 1 ? `0${value}` : value;
  }

  return value;
};
