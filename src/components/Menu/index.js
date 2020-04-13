import { Link } from '../Link';
import { Container } from './styles';
import { useAccess } from '../../hooks/use-access';

export function Menu() {
  const isAdmin = useAccess('admin');
  return (
    <Container>
      <Link activeOnlyWhenExact to="/">
        Главная
      </Link>
      <Link to="/catalog">Каталог</Link>
      <Link to="/orders">Заказы</Link>
      {isAdmin ? <Link to="/admin">Админ</Link> : null}
    </Container>
  );
}
