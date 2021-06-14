import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  StyledContainer,
  StyledContentContainer,
} from './DefaultLayout.styled';
import Navbar from 'components/Navbar';
import Button from 'components/Button';
import Logo from 'components/Logo';
import Paths from 'constants/paths';
import { useTheme } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logout } from '../../store/auth/actions';

const DefaultLayout: React.FC = ({ children }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const theme = useTheme();

  const handleLogout = async () => {
    try {
      await dispatch(logout());
      history.replace(Paths.Login);
    } catch {}
  };

  const actions = !isAuthenticated ? (
    <>
      <Link to={Paths.Login}>
        <Button text color={theme.colors.primary}>
          Log in
        </Button>
      </Link>
      <Link to={Paths.Register}>
        <Button text color={theme.colors.primary}>
          Register
        </Button>
      </Link>
    </>
  ) : (
    <Button text color={theme.colors.error} onClick={handleLogout}>
      Logout
    </Button>
  );

  return (
    <StyledContainer>
      <Navbar left={<Logo />} right={actions} />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledContainer>
  );
};

export default DefaultLayout;
