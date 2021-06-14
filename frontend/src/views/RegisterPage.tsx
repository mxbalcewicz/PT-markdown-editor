import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useAppDispatch } from 'hooks';
import DefaultLayout from 'layouts/GuestLayout';
import { Col, Container, Row } from 'components/Grid';
import Button from 'components/Button';
import RegisterForm from 'components/RegisterForm';
import DividerText from 'components/DividerText';
import { register } from 'store/auth/actions';
import Paths from 'constants/paths';
import { IRegisterPayload } from 'types/auth';

const RegisterPage = () => {
  const history = useHistory();
  const theme = useTheme();
  const dispatch = useAppDispatch();

  const handleRegister = async (payload: IRegisterPayload) => {
    try {
      await dispatch(register(payload));
      history.replace(Paths.Login);
    } catch {}
  };

  return (
    <DefaultLayout>
      <Container>
        <Row>
          <Col md={6} offsetMD={3}>
            <h2>Register</h2>
            <RegisterForm onSubmit={handleRegister} />
          </Col>
        </Row>
        <Row>
          <Col md={6} offsetMD={3}>
            <DividerText>or</DividerText>
          </Col>
        </Row>
        <Row>
          <Col md={6} offsetMD={3}>
            <Link to={Paths.Login}>
              <Button color={theme.colors.primary} block outlined>
                Log in
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </DefaultLayout>
  );
};

export default RegisterPage;
