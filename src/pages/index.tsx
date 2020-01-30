import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Top = lazy(() => import(/* webpackChunkName: 'top' */ './Top'));

export default function RootRouter() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/top" exact component={Top} />
        <Redirect to="/login.html" />
      </Switch>
    </Suspense>
  );
}
