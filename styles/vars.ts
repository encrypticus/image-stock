import { mobileWidth, tabletWidth } from 'utils';

export const vars = {
  uiPoint: 5,

  media: {
    mobile: `(max-width: ${mobileWidth}px)`,
    tablet: `(max-width: ${tabletWidth}px)`,
  },

  colors: {
    red: '#FF0000FF',
    orange: '#FFA500FF',
    yellow: '#FFFF00FF',
    green: '#008000FF',
    green400: '#66BB6AFF',
    green600: '#43A047FF',
    green700: '#388e3c',
    turquoise: '#40E0D0FF',
    blue: '#0000FFFF',
    lilac: '#C8A2C8FF',
    pink: '#FFC0CBFF',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#808080FF',
    brown: '#8A2F28FF',
  },

  fonts: {
    size: {
      h1: 32,
      h2: 24,
      h3: 20,
      h4: 16,
      h5: 13,
      h6: 11,
    },
  },
};
