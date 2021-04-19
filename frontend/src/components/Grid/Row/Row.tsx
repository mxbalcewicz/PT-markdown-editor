import React from 'react';
import { StyledContainer } from './styled';

export interface IRowProps {
  alignContent?: string;
  alignContentSM?: string;
  alignContentMD?: string;
  alignContentLG?: string;
  alignContentXL?: string;
  alignContentXXL?: string;
  align?: string;
  alignSM?: string;
  alignMD?: string;
  alignLG?: string;
  alignXL?: string;
  alignXXL?: string;
  justify?: string;
  justifySM?: string;
  justifyMD?: string;
  justifyLG?: string;
  justifyXL?: string;
  justifyXXL?: string;
}

const Row: React.FC<IRowProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Row;
