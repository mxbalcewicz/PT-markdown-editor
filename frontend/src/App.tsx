import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import 'libs/slate/custom-types';
import Paths from 'constants/paths';
import EditorPage from 'views/EditorPage';
import CreateNewPage from 'views/CreateNewPage';
import NotFoundPage from 'views/NotFoundPage';
import HomePage from 'views/HomePage';
import LoginPage from 'views/LoginPage';
import { useSilentTokenRefresh } from 'hooks';
import RegisterPage from 'views/RegisterPage';
import GuardedRoute from './components/GuardedRoute';

const App = () => {
  useSilentTokenRefresh();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <GuardedRoute exact path={Paths.Home} component={HomePage} />
          <Route exact path={Paths.Login} component={LoginPage} />
          <Route exact path={Paths.Register} component={RegisterPage} />
          <Route exact path={Paths.CreateNew} component={CreateNewPage} />
          <Route exact path={Paths.EditDocument} component={EditorPage} />
          <Route
            exact
            path={Paths.ReadDocument}
            render={() => <EditorPage isReadOnly />}
          />
          <Route path={Paths.NotFound} component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
