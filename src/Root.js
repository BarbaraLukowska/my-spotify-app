import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SpotifyApp from './App';
import NotFound from './theme/NotFound';
import { Provider } from 'react-redux'

const Root = ({store}) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={SpotifyApp} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;