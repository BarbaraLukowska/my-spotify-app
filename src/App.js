import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SpotifyApp from './Main';
import NotFound from './theme/NotFound';


const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={SpotifyApp} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
);

export default App;