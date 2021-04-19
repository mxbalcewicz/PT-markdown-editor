import React from 'react';
import {
  IStyledButtonProps,
  StyledButton,
  StyledIcon,
  StyledText,
} from './styled';

export interface IButtonProps extends IStyledButtonProps {
  type?: 'button' | 'reset' | 'submit';
  append?: string | React.ReactNode;
  prepend?: string | React.ReactNode;
  onClick?: React.MouseEventHandler;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  prepend,
  append,
  ...styledProps
}) => {
  return (
    <StyledButton {...styledProps} onClick={onClick}>
      <StyledText>
        {prepend && <StyledIcon left>{prepend}</StyledIcon>}
        {children}
        {append && <StyledIcon right>{append}</StyledIcon>}
      </StyledText>
    </StyledButton>
  );
};

Button.defaultProps = {
  type: 'button',
  color: '#f5f5f5',
  disabled: false,
};

export default Button;
