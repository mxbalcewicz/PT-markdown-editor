import React, { useEffect } from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import { useAppSelector } from 'hooks';
import Paths from 'constants/paths';

export interface IGuardedRouteProps extends RouteProps {
  redirectPath?: Paths;
}

const GuardedRoute: React.VFC<IGuardedRouteProps> = ({
  redirectPath = Paths.Login,
  ...props
}) => {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const isRefreshed = useAppSelector(({ auth }) => auth.isRefreshed);
  const history = useHistory();

  useEffect(() => {
    if (!isRefreshed) return;
    if (!isAuthenticated) history.replace(redirectPath);
  }, [isRefreshed]);

  return isAuthenticated ? <Route {...props} /> : null;
};

export default GuardedRoute;
