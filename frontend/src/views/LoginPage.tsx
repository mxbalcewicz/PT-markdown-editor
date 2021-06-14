import React, { useCallback } from 'react';
import DefaultLayout from 'layouts/GuestLayout';
import { Col, Container, Row } from 'components/Grid';
import LoginForm from 'components/LoginForm';
import { useTheme } from 'styled-components';
import Button from 'components/Button';
import FacebookLogin from 'react-facebook-login-typed';
import { useAppDispatch, useAppSelector } from 'hooks';
import { loginFacebook, loginLocal } from 'store/auth/actions';
import { getEnvironmentVariable } from 'utils/env';
import DividerText from '../components/DividerText';
import { ILoginLocalPayload } from '../types/auth';
import { Link, useHistory } from 'react-router-dom';
import Paths from '../constants/paths';

const LoginPage = () => {
  const history = useHistory();
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const isPending = useAppSelector(({ auth }) => auth.isPending);

  const handleLogin = async (payload: ILoginLocalPayload) => {
    try {
      await dispatch(loginLocal(payload));
      history.replace(Paths.Home);
    } catch {}
  };

  const handleFacebookLogin = useCallback(
    async (response) => {
      try {
        const { accessToken } = response;
        await dispatch(loginFacebook(accessToken));
        history.replace(Paths.Home);
      } catch {}
    },
    [dispatch],
  );

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={6} offsetMD={3}>
            <h2>Login</h2>
            <LoginForm onSubmit={handleLogin} />
          </Col>
        </Row>
        <Row>
          <Col md={6} offsetMD={3}>
            <DividerText>or</DividerText>
          </Col>
        </Row>
        <Row>
          <Col md={6} offsetMD={3}>
            <FacebookLogin
              appId={getEnvironmentVariable('FB_APP_ID') || ''}
              fields="name,email,picture"
              callback={handleFacebookLogin}
              render={(renderProps) => (
                <Button
                  color={theme.colors.facebook}
                  disabled={isPending}
                  onClick={renderProps.onClick}
                  block
                >
                  Log in with Facebook
                </Button>
              )}
            />
          </Col>
          <Col md={6} offsetMD={3}>
            <Link to={Paths.Register}>
              <Button color={theme.colors.primary} block outlined>
                Register
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default LoginPage;
