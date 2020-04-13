import { Menu } from '../../../Menu';
import { Profile } from '../../../Profile';
import { Container, Logo } from './styles';

export function Header() {
  return (
    <Container>
      <Logo>Autovito</Logo>
      <Menu />
      <Profile />
    </Container>
  );
}
