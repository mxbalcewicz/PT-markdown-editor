import React from 'react';
import { StyledContainer } from './styled';
import Avatar from 'components/Avatar';
import { IAvatarProps } from 'components/Avatar/Avatar';
import { MdMoreHoriz as IconMore } from 'react-icons/all';
import { useTheme } from 'styled-components';
import Tooltip from 'components/Tooltip';

interface IAvatar extends IAvatarProps {
  id: number | string;
  name?: string;
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
  const theme = useTheme();

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
        visibleAvatars.map(({ id, src, name }, idx) => (
          <Tooltip key={id} text={name}>
            <Avatar src={src} size={size} data-animation-id={idx} />
          </Tooltip>
        ))}
    </StyledContainer>
  );
};

export default AvatarsList;
