import { useEffect } from 'react';
import { useAppDispatch } from './index';
import { refreshToken } from '../store/auth/actions';

const useSilentTokenRefresh = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);
};

export default useSilentTokenRefresh;
