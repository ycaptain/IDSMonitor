import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './containers/App';
import HomePage from './containers/HomePage';
import PredPage from './containers/PredPage';

export default () => {
  return (
    <App>
      <Switch>
        <Route path="/pred" component={PredPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </App>
  )
};
