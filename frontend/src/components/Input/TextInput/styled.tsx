import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledSpan = styled.span`
  display: block;
  padding: 4px 0;
`;

export interface InputProps {
  block?: boolean;
  rounded?: boolean;
  outlined?: boolean;
}

export const StyledInput = styled.input<InputProps>`
  font-size: ${({ theme }) => theme.input.fontSize};
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.default};
  border-radius: 4px;
  position: relative;
  box-sizing: border-box;

  &:hover {
    border: 1px solid ${({ theme }) => darken(0.1, theme.colors.default)};
  }

  &:active,
  &:focus {
    outline-color: ${({ theme }) => theme.colors.primary};
  }

  ${({ block }) =>
    block &&
    css`
      display: block;
      width: 100%;
    `}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100px;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      background-color: transparent;
      border-width: 1px;
      border-style: solid;
    `}
`;
