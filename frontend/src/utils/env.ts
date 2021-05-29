import { EnvironmentVariable } from '../types/environment';

export const getEnvironmentVariable = (variable: EnvironmentVariable) =>
  process.env[`REACT_APP_${variable}`];
