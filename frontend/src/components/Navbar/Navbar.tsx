import React from 'react';
import { StyledContainer, StyledContainerSide } from './styled';

export interface INavbarProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Navbar: React.VFC<INavbarProps> = ({ left, right }) => {
  return (
    <StyledContainer>
      <StyledContainerSide>{left}</StyledContainerSide>
      <StyledContainerSide>{right}</StyledContainerSide>
    </StyledContainer>
  );
};

export default Navbar;
