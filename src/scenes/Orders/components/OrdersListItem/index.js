import { useCallback } from 'react';

import {
  Icon,
  Container,
  DeleteButton,
  Title,
  Description,
  Content,
  Controls,
  TextWrapper,
  OrderWrapper,
  Line,
} from './styles';
import { Offers } from '../Offers';
import { deleteOrderApi } from '../../../../api/orders';

export function ListItem({ order, getData }) {
  const handleDeleteButtonClick = useCallback(async () => {
    await deleteOrderApi(order.id);
    getData();
  });

  return (
    <Container>
      <OrderWrapper>
        <Content>
          <Icon />
          <TextWrapper>
            <Title>{order.car.model}</Title>
            <Description>{order.car.mark}</Description>
          </TextWrapper>
        </Content>
        <Controls>
          <DeleteButton text="Удалить" onClick={handleDeleteButtonClick} />
        </Controls>
      </OrderWrapper>
      <Offers offers={order.offers} getData={getData} />
    </Container>
  );
}
