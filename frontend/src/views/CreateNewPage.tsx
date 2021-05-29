import { useEffect } from 'react';
import { useAppDispatch } from 'hooks';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { generatePath } from 'utils/router';
import Paths from 'router/paths';
import { create as createDocument } from 'store/docs/actions';

const CreateNewPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createDocument())
      .then(unwrapResult)
      .then(({ hash }) => {
        const path = generatePath(Paths.Document, { hash });
        history.replace(path);
      })
      .catch(() => history.push(Paths.Home));
  }, [dispatch, history]);

  return null;
};

export default CreateNewPage;
