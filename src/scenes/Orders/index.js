import { useState, useCallback, useEffect } from 'react';
import { ContentLayout } from 'Components/ContentLayout';
import { getUserOrdersApi } from 'Api/orders';

import { ListItem } from './components/OrdersListItem';
import { Container } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const getData = useCallback(() => {
    getUserOrdersApi().then(setOrders);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <ContentLayout>
      <Container>
        {orders.length ? (
          orders.map((order) => <ListItem key={order.id} order={order} getData={getData} />)
        ) : (
          <h2>Список пуст</h2>
        )}
      </Container>
    </ContentLayout>
  );
}
