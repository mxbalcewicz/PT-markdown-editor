import React from 'react';
import styled from 'styled-components';
import { up } from 'styled-breakpoints';

const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 12px;

  ${up('sm')} {
    max-width: 540px;
  }

  ${up('md')} {
    max-width: 720px;
  }

  ${up('lg')} {
    max-width: 960px;
  }

  ${up('xl')} {
    max-width: 1140px;
  }

  ${up('xxl')} {
    max-width: 1320px;
  }
`;

const Container: React.FC = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
