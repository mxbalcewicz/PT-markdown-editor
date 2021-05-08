import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditorPage from './views/EditorPage';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import './plugins/slate/custom-types';
import { Paths } from './router/paths';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path={Paths.Homepage} component={EditorPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
