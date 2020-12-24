export const getQueryString = (options) => {
  let optionsQueryString = '';
  for (const option in options) {
    optionsQueryString += `&${option}=${options[option]}`;
  }

  return optionsQueryString;
};
