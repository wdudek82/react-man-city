// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Hoc/Layout';
import Home from './components/home';

type Props = {};

const Routes = (pros: Props) => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Layout>
  );
};

export default Routes;
