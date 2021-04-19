import styled from 'styled-components';

export interface IStyledImageContainerProps {
  isSrcProvided: boolean;
  size?: number;
}

export const StyledImageContainer = styled.div<IStyledImageContainerProps>`
  background-color: ${({ theme, isSrcProvided }) =>
    !isSrcProvided ? theme.colors.primary : null};
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: ${({ size }) => `${size}px`};
  position: relative;
  overflow: hidden;
`;

export const StyledImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
