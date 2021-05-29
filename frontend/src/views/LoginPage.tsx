import React, { useCallback, useContext } from 'react';
import GuestLayout from '../layouts/GuestLayout';
import { Col, Container, Row } from '../components/Grid';
import LoginForm from '../components/LoginForm';
import { ThemeContext } from 'styled-components';
import Button from '../components/Button';
import FacebookLogin from 'react-facebook-login-typed';
import { useAppDispatch, useAppSelector } from '../hooks';
import { login, logout } from '../store/auth/actions';
import { fetchAll } from '../store/docs/actions';
import { unwrapResult } from '@reduxjs/toolkit';
import { getEnvironmentVariable } from '../utils/env';

const LoginPage = () => {
  const theme = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const isPending = useAppSelector(({ auth }) => auth.isPending);

  const handleTest = async () => {
    const result = await dispatch(fetchAll()).then(unwrapResult);
    console.log(result);
  };

  const handleLogout = async () => await dispatch(logout());

  const handleLogin = useCallback(
    async (response) => {
      const { accessToken } = response;
      dispatch(login(accessToken));
    },
    [dispatch],
  );

  return (
    <GuestLayout>
      <Container>
        <Row>
          <Col md={6} offsetMD={3}>
            <FacebookLogin
              appId={getEnvironmentVariable('FB_APP_ID') || ''}
              fields="name,email,picture"
              callback={handleLogin}
              render={(renderProps) => (
                <Button
                  color={theme.colors.facebook}
                  disabled={isPending}
                  onClick={renderProps.onClick}
                >
                  Log in with Facebook
                </Button>
              )}
            />
            <Button
              color={theme.colors.primary}
              onClick={handleTest}
              disabled={isPending}
            >
              Test
            </Button>
            <Button
              color={theme.colors.error}
              onClick={handleLogout}
              disabled={isPending}
            >
              Logout
            </Button>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </GuestLayout>
  );
};

export default LoginPage;
