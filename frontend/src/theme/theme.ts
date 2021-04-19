export type ThemeType = typeof theme;

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

const colors = {
  primary: '#0D53FC',
  secondary: '#2e2e2e',
  default: '#d0d0d0',
  error: '#d72222',
};

const fontSize = {
  sm: '1.2rem',
  md: '1.4rem',
  lg: '1.6rem',
  xl: '2.8rem',
};

const button = {
  borderRadius: '4px',
};

const input = {
  fontSize: '1.4rem',
  borderRadius: '4px',
};

export const theme = {
  breakpoints,
  colors,
  fontSize,
  button,
  input,
};

export default theme;
