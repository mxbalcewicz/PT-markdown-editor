import React from 'react';
import Navbar from '../components/Navbar';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultLayout;
