import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
// import Loading from '../components/Loading';
import Main from '../pages';

export default () => (
  <React.Fragment>
    <Switch>
      <Route path="/" component={Main} />
      <Redirect from="*" to="/portfolio" />
    </Switch>
  </React.Fragment>
);
