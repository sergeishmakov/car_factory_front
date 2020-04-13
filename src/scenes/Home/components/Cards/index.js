import { Container, Card, Icon } from './styles';
import { Button } from '../../../../components/Button';
import { useHistory } from 'react-router';
import { faHandPointer, faEye, faPercentage } from '@fortawesome/free-solid-svg-icons';

const cards = Object.freeze([
  {
    id: 0,
    title: 'Выбирайте автомобиль',
    description: 'Выберите автомобиль из тех что представлены в нашем каталоге',
    icon: faHandPointer,
    redirectUrl: '/catalog',
  },
  {
    id: 1,
    title: 'Следите за статусом заявки',
    description: 'На странице заказов вы увидите статус вашей заявки',
    icon: faEye,
    redirectUrl: '/orders',
  },
  {
    id: 2,
    title: 'Найдите наилучший вариант',
    description: 'Если этот автомобиль уже кто-то купил, наш диллер предложит вам другой вариант со скидкой в 5%',
    icon: faPercentage,
    redirectUrl: '/orders',
  },
]);

export function Cards() {
  const history = useHistory();
  return (
    <Container>
      {cards.map(({ id, title, icon, description, redirectUrl }) => (
        <Card key={id} onClick={() => history.push(redirectUrl)}>
          <Icon icon={icon} />
          <h3>{title}</h3>
          <p>{description}</p>
        </Card>
      ))}
    </Container>
  );
}
