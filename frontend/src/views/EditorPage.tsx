import React, { useEffect } from 'react';
import EditorLayout from 'layouts/DefaultLayout';
import { Container } from 'components/Grid';
import Editor from 'components/Editor';
import { useHistory, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchOne as fetchDocument } from 'store/docs/actions';
import { unwrapResult } from '@reduxjs/toolkit';
import Paths from 'constants/paths';

interface IEditorPageParams {
  hash: string;
}

interface IEditorPageProps {
  isReadOnly?: boolean;
}

const EditorPage: React.VFC<IEditorPageProps> = ({ isReadOnly = false }) => {
  const isLoaded = useAppSelector(({ docs }) => !!docs.document);
  const { hash } = useParams<IEditorPageParams>();
  const dispatch = useAppDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchDocument({ hash, isReadOnly }))
      .then(unwrapResult)
      .catch(() => history.replace(Paths.Home));
  }, [dispatch, hash, history]);

  return (
    <EditorLayout>
      <Container>{isLoaded && <Editor isReadOnly={isReadOnly} />}</Container>
    </EditorLayout>
  );
};

export default EditorPage;
