import React from 'react';

interface IRadioContext {
  radioValue: string | number;
  handleOnChange(value: string | number): void;
  name?: string;
}

const RadioContext = React.createContext<IRadioContext | undefined>(undefined);

export default RadioContext;
