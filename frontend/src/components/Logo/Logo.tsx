import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from './Logo.styled';
import Paths from 'constants/paths';

const Logo: React.FC = ({ children }) => {
  return (
    <Link to={Paths.Home}>
      <Text>{children || 'Editor'}</Text>
    </Link>
  );
};

export default Logo;
