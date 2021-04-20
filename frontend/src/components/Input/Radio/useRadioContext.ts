import React from 'react';
import RadioContext from './RadioContext';

const useRadioContext = () => {
  const context = React.useContext(RadioContext);
  if (!context) {
    throw new Error(
      `Radio compound components cannot be rendered outside the Radio component`,
    );
  }
  return context;
};

export default useRadioContext;
