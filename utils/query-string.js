/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export const getQueryString = (options) => {
  let optionsQueryString = '';
  for (const option in options) {
    optionsQueryString += `&${option}=${options[option]}`;
  }

  return optionsQueryString;
};
