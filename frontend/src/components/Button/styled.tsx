import styled, { css } from 'styled-components';
import {
  transparentize,
  readableColor,
  darken,
  meetsContrastGuidelines,
  lighten,
} from 'polished';

export interface IStyledButtonProps {
  block?: boolean;
  color?: string;
  sm?: boolean;
  lg?: boolean;
  xl?: boolean;
  text?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.button.borderRadius};
  padding: 1.2rem 1.6rem;
  border-width: 1px;
  cursor: pointer;
  font-weight: 700;
  transition: background-color 0.2s;
  color: ${({ color }) => (color ? readableColor(color) : 'white')};
  outline: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.md};

  &:disabled {
    background-color: ${({ theme }) =>
      lighten(0.1, theme.colors.default)} !important;
    color: ${({ theme }) => darken(0.1, theme.colors.default)} !important;
    border-color: ${({ theme }) =>
      darken(0.1, theme.colors.default)} !important;
    cursor: auto;

    ${({ text }) =>
      text &&
      css`
        background-color: transparent !important;
      `}
  }

  &:hover {
    background-color: ${({ color }) => color && darken(0.05, color)};
  }

  &:active {
    background-color: ${({ color }) => color && darken(0.15, color)};
  }

  ${({ sm, theme }) =>
    sm &&
    css`
      padding: 1rem 1.4rem;
      font-size: ${theme.fontSize.sm};
    `}

  ${({ lg, theme }) =>
    lg &&
    css`
      padding: 1.4rem 1.8rem;
      font-size: ${theme.fontSize.lg};
    `}

  ${({ xl, theme }) =>
    xl &&
    css`
      padding: 1.6rem 2rem;
      font-size: ${theme.fontSize.xl};
    `}

  ${({ block }) =>
    block &&
    css`
      width: 100%;
      display: block;
    `}

  ${({ outlined, color }) => {
    const isColorVisible =
      color && meetsContrastGuidelines(color, 'white').AALarge;
    return (
      outlined &&
      css`
        background-color: transparent;
        border-style: solid;
        border-color: ${color};
        color: ${isColorVisible ? color : color && darken(0.5, color)};

        &:hover {
          background-color: ${color && transparentize(0.8, color)};
        }

        &:active {
          background-color: ${color && transparentize(0.7, color)};
        }
      `
    );
  }}

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 100px;
    `}

  ${({ text, color }) =>
    text &&
    css`
      border: none;
      background-color: transparent;
      color: ${color};

      &:hover {
        background-color: ${color && transparentize(0.8, color)};
      }

      &:active {
        background-color: ${color && transparentize(0.7, color)};
      }
    `}
`;

export const StyledText = styled.span`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
`;

interface IStyledIconProps {
  left?: boolean;
  right?: boolean;
}

export const StyledIcon = styled.span<IStyledIconProps>`
  margin-right: ${({ left }) => left && '8px'};
  margin-left: ${({ right }) => right && '8px'};

  svg {
    display: block;
    margin: auto;
  }
`;
