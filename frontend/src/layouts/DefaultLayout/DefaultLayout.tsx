import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import Toolbar from '../../components/Toolbar';
import AvatarsList from '../../components/UsersList';
import Button from '../../components/Button';
import { ThemeContext } from 'styled-components';
import { StyledContainer, StyledContentContainer } from './styled';
import { useAppSelector } from '../../hooks';

const DefaultLayout: React.FC = ({ children }) => {
  const users = useAppSelector(({ users }) => users.users);
  const theme = useContext(ThemeContext);

  const avatars = users.map((user) => ({
    id: user,
    src: 'https://picsum.photos/67',
  }));

  return (
    <StyledContainer>
      <Navbar
        left={<Toolbar />}
        right={
          <>
            <AvatarsList size={36} avatars={avatars} />
            <Button sm color={theme.colors.primary}>
              Log in
            </Button>
          </>
        }
      />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledContainer>
  );
};

export default DefaultLayout;
