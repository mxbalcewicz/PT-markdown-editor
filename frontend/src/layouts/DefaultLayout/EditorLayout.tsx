import React from 'react';
import Navbar from 'components/Navbar';
import Toolbar from 'components/Toolbar';
import AvatarsList from 'components/AvatarsList';
import { StyledContainer, StyledContentContainer } from './EditorLayout.styled';
import { useAppSelector } from 'hooks';

const EditorLayout: React.FC = ({ children }) => {
  const users = useAppSelector(({ users }) => users.users);

  const avatars = users.map((user) => ({
    id: user,
    name: user,
  }));

  return (
    <StyledContainer>
      <Navbar
        left={
          <>
            <Toolbar />
          </>
        }
        right={<AvatarsList size={36} avatars={avatars} />}
      />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledContainer>
  );
};

export default EditorLayout;
