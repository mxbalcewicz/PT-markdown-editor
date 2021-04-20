import React from 'react';
import {
  AlignContent,
  AlignItems,
  JustifyContent,
  StyledContainer,
} from './styled';

export interface IRowProps {
  alignContent?: AlignContent;
  alignContentSM?: AlignContent;
  alignContentMD?: AlignContent;
  alignContentLG?: AlignContent;
  alignContentXL?: AlignContent;
  alignContentXXL?: AlignContent;
  align?: AlignItems;
  alignSM?: AlignItems;
  alignMD?: AlignItems;
  alignLG?: AlignItems;
  alignXL?: AlignItems;
  alignXXL?: AlignItems;
  justify?: JustifyContent;
  justifySM?: JustifyContent;
  justifyMD?: JustifyContent;
  justifyLG?: JustifyContent;
  justifyXL?: JustifyContent;
  justifyXXL?: JustifyContent;
}

const Row: React.FC<IRowProps> = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Row;
