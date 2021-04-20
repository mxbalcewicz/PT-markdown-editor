import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import EditorPage from './views/EditorPage';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import './plugins/slate';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={EditorPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
