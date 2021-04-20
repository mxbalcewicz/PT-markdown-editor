import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const StyledInputContainer = styled.div`
  display: inline-block;
  position: relative;
  margin-right: 8px;
`;

export const StyledInput = styled.input`
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  opacity: 0;
  cursor: pointer;
`;

interface IconProps {
  checked: boolean;
}

export const StyledIcon = styled.span<IconProps>`
  width: 100%;
  height: 100%;
  color: ${({ theme, checked }) =>
    checked ? theme.colors.primary : theme.colors.default};

  svg {
    display: block;
    margin: auto;
    fill: currentColor;
  }
`;
