import styled from 'styled-components';

export const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const StyledContentContainer = styled.div`
  flex-grow: 1;
  & > * {
    height: 100%;
  }
`;
