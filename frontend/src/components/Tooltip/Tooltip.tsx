import React from 'react';
import styled from 'styled-components';

export interface ITooltipProps {
  text?: string;
}

const StyledTooltip = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    pointer-events: none;
    opacity: 0;
    content: attr(data-tooltip);
    font-size: ${({ theme }) => theme.fontSize.sm};
    padding: 2px 4px;
    white-space: nowrap;
    position: absolute;
    z-index: 10;
    top: 100%;
    margin-top: 2px;
    left: 50%;
    border-radius: 4px;
    background-color: black;
    color: white;
    transition: opacity 0.2s, transform 0.1s;
    transition-delay: 0s;
    transform: translate(-50%, 20%);
  }

  &:hover::after {
    transition-delay: 0.5s;
    display: inline-block;
    opacity: 1;
    transform: translate(-50%, 0);
  }
`;

const Tooltip: React.FC<ITooltipProps> = ({ children, text }) => {
  return <StyledTooltip data-tooltip={text}>{children}</StyledTooltip>;
};

export default Tooltip;
