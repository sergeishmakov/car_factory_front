import { useContext } from 'react';

import { DataContext } from '../../contexts';
import { ListItem } from './components/OrdersListItem';

export function Orders() {
  const { orders } = useContext(DataContext);

  return (
    <div>{orders.length ? orders.map((order) => <ListItem key={order.id} order={order} />) : <h2>Список пуст</h2>}</div>
  );
}
