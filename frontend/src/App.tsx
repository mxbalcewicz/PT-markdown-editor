import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
