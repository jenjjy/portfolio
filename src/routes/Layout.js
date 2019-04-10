import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';

export default () => (
  <React.Fragment>
    {({ error, loading }) => {
      if (loading) return <Loading inverted />;
      return (
        <div>
          <hi>Sup</hi>
          {/* <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Redirect from="*" to="/home" />
          </Switch> */}
        </div>
      );
    }}
  </React.Fragment>
);
