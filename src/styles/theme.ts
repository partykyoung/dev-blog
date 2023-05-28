import '@emotion/react';

const darkMode = {};

const lightMode = {};

const theme = {
  layout: {
    width: {
      container: '1200px',
    },
    height: {
      footer: '50px',
      header: '50px',
    },
  },
  color: {
    ...lightMode,
  },
};

export { darkMode, lightMode };
export default theme;

type ThemeType = typeof theme;
declare module '@emotion/react' {
  export interface Theme extends ThemeType {}
}
