import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import './plugins/slate/custom-types';
import Paths from './router/paths';
import EditorPage from './views/EditorPage';
import CreateNewPage from './views/CreateNewPage';
import NotFoundPage from './views/NotFoundPage';
import HomePage from './views/HomePage';
import LoginPage from './views/LoginPage';
import { useSilentTokenRefresh } from './hooks';

const App = () => {
  useSilentTokenRefresh();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={Paths.Home} component={HomePage} />
          <Route exact path={Paths.Login} component={LoginPage} />
          <Route exact path={Paths.CreateNew} component={CreateNewPage} />
          <Route exact path={Paths.Document} component={EditorPage} />
          <Route path={Paths.NotFound} component={NotFoundPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
