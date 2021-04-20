import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  padding: 8px 16px;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.colors.default};
`;

export const StyledContainerSide = styled.div`
  display: flex;
  align-items: center;

  &:first-child {
    flex-grow: 1;
  }
`;
