import React, { useContext } from 'react';
import GuestLayout from 'layouts/GuestLayout';
import { Container } from 'components/Grid';
import Button from 'components/Button';
import Paths from 'constants/paths';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <GuestLayout>
      <Container>
        <h2>Page not found</h2>
        <Link to={Paths.CreateNew}>
          <Button color={theme.colors.primary}>Create new document</Button>
        </Link>
      </Container>
    </GuestLayout>
  );
};

export default NotFoundPage;
