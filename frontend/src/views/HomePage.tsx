import React, { useContext } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import { Link } from 'react-router-dom';
import Paths from '../router/paths';
import Button from '../components/Button';
import { ThemeContext } from 'styled-components';

const CreateNewPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <DefaultLayout>
      <Container>
        <Link to={Paths.CreateNew}>
          <Button color={theme.colors.primary}>Create new document</Button>
        </Link>
      </Container>
    </DefaultLayout>
  );
};

export default CreateNewPage;
