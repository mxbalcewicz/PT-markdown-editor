import React, { useEffect } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import { Container } from '../components/Grid';
import Editor from '../components/Editor';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchOne as fetchDocument } from '../store/docs/actions';
import { unwrapResult } from '@reduxjs/toolkit';
import Paths from '../router/paths';

interface IEditorPageParams {
  hash: string;
}

const EditorPage: React.VFC = () => {
  const isLoaded = useAppSelector(({ docs }) => !!docs.document);
  const { hash } = useParams<IEditorPageParams>();
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDocument(hash))
      .then(unwrapResult)
      .catch(() => history.replace(Paths.Home));
  }, [dispatch, hash, history]);

  return (
    <DefaultLayout>
      <Container>{isLoaded && <Editor />}</Container>
    </DefaultLayout>
  );
};

export default EditorPage;
