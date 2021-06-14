import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import FacebookLogin from 'react-facebook-login-typed';
import { useAppDispatch, useAppSelector } from 'hooks';
import DefaultLayout from 'layouts/GuestLayout';
import { Col, Container, Row } from 'components/Grid';
import LoginForm from 'components/LoginForm';
import Button from 'components/Button';
import DividerText from 'components/DividerText';
import Paths from 'constants/paths';
import { ILoginLocalPayload } from 'types/auth';
import { getEnvironmentVariable } from 'utils/env';
import { loginFacebook, loginLocal } from 'store/auth/actions';

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
          <Col cols={12} md={6} offsetMD={3}>
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
          <Col cols={12} md={6} offsetMD={3}>
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
