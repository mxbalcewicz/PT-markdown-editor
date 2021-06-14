import React, { useEffect } from 'react';
import DefaultLayout from 'layouts/GuestLayout';
import { Container } from 'components/Grid';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchAll as fetchUserDocs } from 'store/docs/actions';
import DocumentsList from 'components/DocumentsList';

const HomePage = () => {
  const dispatch = useAppDispatch();
  const documents = useAppSelector(({ docs }) => docs.documents);
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) dispatch(fetchUserDocs());
  }, [dispatch, isAuthenticated]);

  return (
    <DefaultLayout>
      <Container>
        <h2>Hello Tymon</h2>
        <DocumentsList documents={documents} />
      </Container>
    </DefaultLayout>
  );
};

export default HomePage;
