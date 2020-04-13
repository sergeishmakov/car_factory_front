import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../../utils/current-user';

export function AuthenticateRoute({ path, component }) {
  const user = getUser();
  if (user) return <Route path={path} component={component} />;
  return <Redirect to="/signin" />;
}
