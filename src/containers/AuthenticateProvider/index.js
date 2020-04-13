import { useCallback, useState } from 'react';

import { userSignOut, getUser, userSignIn } from '../../utils/current-user';
import { Authenticate } from '../../contexts/Authenticate';

export function AuthenticateProvider({ children }) {
  const initialUser = getUser();
  const [user, setUser] = useState(initialUser);

  const handleSignOut = useCallback((data) => {
    userSignOut();
    setUser(null);
  }, []);

  const handleSignIn = useCallback((data) => {
    userSignIn(data);
    setUser(data);
  }, []);

  return (
    <Authenticate.Provider value={{ user, onSignOut: handleSignOut, onSignIn: handleSignIn }}>
      {children}
    </Authenticate.Provider>
  );
}
