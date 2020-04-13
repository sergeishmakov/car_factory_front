import { useState, useEffect, useCallback } from 'react';

import { ContentLayout } from '../../components/ContentLayout';
import { Nootebook } from '../../components/Nootebook';
import { getCarsApi } from '../../api/cars';
import { DataProvider } from './containers/DataProvider';
import { CarsTable } from './components/CarsTable';
import { Orders } from './components/Orders';
import { Container } from './styles';
import { getOrdersApi } from '../../api/orders';

const tabs = [
  { id: 0, path: 'list', title: 'Каталог' },
  { id: 1, path: 'orders', title: 'Заявки' },
];

const tabsContent = [<CarsTable />, <Orders />];

export default function Admin() {
  const [cars, setCars] = useState([]);
  const [orders, setOrders] = useState([]);

  const getOrders = useCallback(() => {
    getOrdersApi().then(setOrders);
  }, []);

  const getCars = useCallback(() => {
    getCarsApi().then(setCars);
  }, []);

  useEffect(() => {
    getOrders();
    getCars();
  }, []);

  return (
    <DataProvider cars={cars} orders={orders} getOrders={getOrders} getCars={getCars}>
      <ContentLayout>
        <Container>
          <Nootebook tabs={tabs} tabsContent={tabsContent} />
        </Container>
      </ContentLayout>
    </DataProvider>
  );
}
