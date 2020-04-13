import { useCallback } from 'react';
import { useHistory } from 'react-router';

import { useAuthenticate } from '../../hooks/use-authenticate';
import { Container, Text, Login, Button } from './styles';

export function Profile() {
  const history = useHistory();

  const { user, onSignOut } = useAuthenticate();

  const handleSignInButtonClick = useCallback(() => history.push('/signin'), []);

  const handleSignUpButtonClick = useCallback(() => history.push('/signup'), []);

  const handleSignOutButtonClick = useCallback(() => onSignOut(), []);

  return (
    <Container>
      {user ? (
        <>
          <Text>Вы вошли как</Text>
          <Login>{user.login}</Login>
          <Button onClick={handleSignOutButtonClick}>Sign Out</Button>
        </>
      ) : (
        <>
          <Button onClick={handleSignInButtonClick}>Sign In</Button>
          <Button onClick={handleSignUpButtonClick}>Sign Up</Button>
        </>
      )}
    </Container>
  );
}
