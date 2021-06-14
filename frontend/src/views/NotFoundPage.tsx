import React from 'react';
import DefaultLayout from 'layouts/GuestLayout';
import { Container } from 'components/Grid';
import Button from 'components/Button';
import Paths from 'constants/paths';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const theme = useTheme();
  return (
    <DefaultLayout>
      <Container>
        <h2>Page not found</h2>
        <Link to={Paths.CreateNew}>
          <Button color={theme.colors.primary}>Create new document</Button>
        </Link>
      </Container>
    </DefaultLayout>
  );
};

export default NotFoundPage;
