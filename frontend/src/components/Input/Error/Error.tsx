import React from 'react';
import { StyledErrorBlock, StyledErrorInline } from './styled';

export interface IErrorProps {
  inline?: boolean;
}

const Error: React.FC<IErrorProps> = ({ children, inline = false }) => {
  return inline ? (
    <StyledErrorInline>{children}</StyledErrorInline>
  ) : (
    <StyledErrorBlock>{children}</StyledErrorBlock>
  );
};

export default Error;
