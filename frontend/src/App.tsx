import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import './plugins/slate/custom-types';
import { Paths } from './router/paths';
import EditorPage from './views/EditorPage';
import LoginPage from './views/LoginPage';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={Paths.Homepage} component={EditorPage} />
          <Route exact path={Paths.Login} component={LoginPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
