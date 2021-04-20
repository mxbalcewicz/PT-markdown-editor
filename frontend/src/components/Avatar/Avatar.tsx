import React, { useContext } from 'react';
import { StyledImageContainer, StyledImage } from './styled';
import { MdPerson as IconPerson } from 'react-icons/all';
import { ThemeContext } from 'styled-components';

export interface IAvatarProps {
  size?: number;
  src?: string;
  fallbackIcon?: React.ReactNode;
}

const Avatar: React.VFC<IAvatarProps> = ({ size = 32, src, fallbackIcon }) => {
  const theme = useContext(ThemeContext);
  const icon = fallbackIcon || <IconPerson color={theme.colors.white} />;

  return (
    <StyledImageContainer size={size} isSrcProvided={!!src}>
      {src ? <StyledImage src={src} /> : icon}
    </StyledImageContainer>
  );
};

export default Avatar;
