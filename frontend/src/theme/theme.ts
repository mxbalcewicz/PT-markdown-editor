export type ThemeType = typeof theme;

const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

const colors = {
  primary: '#0d53fc',
  secondary: '#2e2e2e',
  default: '#e5e5e5',
  error: '#d72222',
  white: '#ffffff',
  facebook: "#3b5998",
};

const border = {
  radius: '4px',
};

const fontSize = {
  sm: '1.2rem',
  md: '1.4rem',
  lg: '1.6rem',
  xl: '2.8rem',
};

const button = {
  borderRadius: border.radius,
};

const input = {
  fontSize: fontSize.md,
  borderRadius: border.radius,
};

const error = {
  fontSize: fontSize.md,
};

const label = {
  fontSize: fontSize.sm,
};

export const theme = {
  breakpoints,
  colors,
  fontSize,
  button,
  input,
  error,
  label,
};

export default theme;
