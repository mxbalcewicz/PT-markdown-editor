import styled, { css } from 'styled-components';

const errorStyles = css`
  margin: 0;
  color: ${({ theme }) => theme.colors.error || 'red'};
`;

export const StyledErrorBlock = styled.p`
  ${errorStyles};
`;

export const StyledErrorInline = styled.span`
  ${errorStyles};
`;
