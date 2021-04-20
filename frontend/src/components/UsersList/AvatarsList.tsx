import React, { useContext } from 'react';
import { StyledContainer } from './styled';
import Avatar from '../Avatar';
import { IAvatarProps } from '../Avatar/Avatar';
import { MdMoreHoriz as IconMore } from 'react-icons/all';
import { ThemeContext } from 'styled-components';

interface IAvatar extends IAvatarProps {
  id: number | string;
}

export interface IAvatarsListProps {
  size?: number;
  maxVisibleAvatars?: number;
  avatars?: IAvatar[];
}

const AvatarsList: React.VFC<IAvatarsListProps> = ({
  size = 32,
  maxVisibleAvatars = 3,
  avatars,
}) => {
  const theme = useContext(ThemeContext);

  const visibleAvatars = avatars && avatars.slice(0, maxVisibleAvatars);
  const isVisibleAvatarsExceeded =
    avatars && avatars.length > maxVisibleAvatars;

  return (
    <StyledContainer>
      {isVisibleAvatarsExceeded && (
        <Avatar
          size={size}
          fallbackIcon={<IconMore color={theme.colors.white} />}
        />
      )}
      {visibleAvatars &&
        visibleAvatars.map(({ id, src }, idx) => (
          <Avatar src={src} size={size} key={id} data-animation-id={idx} />
        ))}
    </StyledContainer>
  );
};

export default AvatarsList;
