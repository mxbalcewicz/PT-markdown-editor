import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import Editor from '../components/Editor';

const EditorPage = () => {
  return (
    <DefaultLayout>
      <Container>
        <Editor />
      </Container>
    </DefaultLayout>
  );
};

export default EditorPage;
