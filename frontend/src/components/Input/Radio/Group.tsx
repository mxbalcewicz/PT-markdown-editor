import React from 'react';
import RadioContext from './RadioContext';
import Error from '../Error';

export interface IRadioGroupProps {
  error?: string;
  name?: string;
  defaultValue: string | number;
  onChange?(value: string | number): any;
}

const Group: React.FC<IRadioGroupProps> = ({
  children,
  error,
  name,
  defaultValue,
  onChange,
}) => {
  const [value, setValue] = React.useState<string | number>('');

  function handleOnChange(radioValue: string | number) {
    setValue(radioValue);
    onChange && onChange(radioValue);
  }

  React.useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  return (
    <RadioContext.Provider value={{ radioValue: value, handleOnChange, name }}>
      <div role="radiogroup">{children}</div>
      <Error>{error}</Error>
    </RadioContext.Provider>
  );
};

export default Group;
