import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GlobalStyle from './theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme/theme';
import './plugins/slate/custom-types';
import store from './store';
import Paths from './router/paths';
import EditorPage from './views/EditorPage';
import CreateNewPage from './views/CreateNewPage';
import NotFoundPage from './views/NotFoundPage';
import { Provider } from 'react-redux';
import HomePage from './views/HomePage';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route exact path={Paths.Home} component={HomePage} />
            <Route exact path={Paths.CreateNew} component={CreateNewPage} />
            <Route exact path={Paths.Document} component={EditorPage} />
            <Route path={Paths.NotFound} component={NotFoundPage} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
