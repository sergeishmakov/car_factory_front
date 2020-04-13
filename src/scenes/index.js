import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ScreenSpinner } from '../components/ScreenSpinner';
import { AdminRoute } from '../components/AdminRoute';
import { AuthenticateRoute } from '../components/AuthenticateRoute';
import { AuthenticateProvider } from '../containers/AuthenticateProvider';

const Home = lazy(() => import('./Home'));
const Catalog = lazy(() => import('./Catalog'));
const Orders = lazy(() => import('./Orders'));
const Admin = lazy(() => import('./Admin'));
const SignIn = lazy(() => import('./SignIn'));
const SignUp = lazy(() => import('./SignUp'));

export default function App() {
  return (
    <Suspense fallback={<ScreenSpinner />}>
      <AuthenticateProvider>
        <Router>
          <Switch>
            <Route path="/catalog" component={Catalog} />
            <AuthenticateRoute path="/orders" component={Orders} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <AdminRoute path="/admin" component={Admin} />
            <Route exect path="/" component={Home} />
          </Switch>
        </Router>
      </AuthenticateProvider>
    </Suspense>
  );
}
