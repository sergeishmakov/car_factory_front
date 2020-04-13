import { Route, Redirect } from 'react-router-dom';

import { getUser } from '../../utils/current-user';

export function AdminRoute({ path, component }) {
  const user = getUser();
  if (user?.role === 'admin') return <Route path={path} component={component} />;
  return <Redirect to="/" />;
}
