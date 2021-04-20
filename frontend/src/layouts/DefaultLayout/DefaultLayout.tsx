import React, { useContext } from 'react';
import Navbar from '../../components/Navbar';
import Toolbar from '../../components/Toolbar';
import AvatarsList from '../../components/UsersList';
import Button from '../../components/Button';
import { ThemeContext } from 'styled-components';
import { avatars } from '../../components/UsersList/__mocks__/data';
import { StyledContainer, StyledContentContainer } from './styled';

const DefaultLayout: React.FC = ({ children }) => {
  const theme = useContext(ThemeContext);

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
