import React from 'react';
import { StyledContainer } from './styled';

export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface IColProps {
  offset?: ColumnSize;
  offsetSM?: ColumnSize;
  offsetMD?: ColumnSize;
  offsetLG?: ColumnSize;
  offsetXL?: ColumnSize;
  offsetXXL?: ColumnSize;
  order?: ColumnSize;
  orderSM?: ColumnSize;
  orderMD?: ColumnSize;
  orderLG?: ColumnSize;
  orderXL?: ColumnSize;
  orderXXL?: ColumnSize;
  cols?: ColumnSize;
  sm?: ColumnSize;
  md?: ColumnSize;
  lg?: ColumnSize;
  xl?: ColumnSize;
  xxl?: ColumnSize;
}

const Col: React.FC<IColProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Col;
