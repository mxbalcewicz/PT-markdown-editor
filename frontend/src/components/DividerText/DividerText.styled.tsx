import styled, { css } from 'styled-components';

const Line = css`
  content: '';
  height: 1px;
  background-color: ${({ theme }) => theme.colors.lightgray};
  flex: 1;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  width: 100%;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.gray};
  user-select: none;

  &::before {
    ${Line};

    margin-right: 8px;
  }

  &::after {
    ${Line};

    margin-left: 8px;
  }
`;
