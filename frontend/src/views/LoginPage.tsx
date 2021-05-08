import React from 'react';
import GuestLayout from '../layouts/GuestLayout';
import { Col, Container, Row } from '../components/Grid';
import LoginForm from '../components/LoginForm';

const EditorPage = () => {
  return (
    <GuestLayout>
      <Container>
        <Row>
          <Col md={6} offsetMD={3}>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </GuestLayout>
  );
};

export default EditorPage;
