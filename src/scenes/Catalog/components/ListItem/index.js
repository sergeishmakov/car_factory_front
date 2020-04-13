import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { Button } from 'Components/Button';
import { Card } from 'Components/Card';

import { Controls, Content, Title, Text } from './styles';
import { createOrderApi } from '../../../../api/orders';

export function ListItem({ car, getCars }) {
  const handleOrderButtonClick = useCallback(async () => {
    const { isExist } = await createOrderApi(car.id);
    if (isExist) {
      toast.success('У вас уже есть подобный заказ. Вы можете отслеживать его на странице заказов.');
    } else {
      toast.success('Заказ принят в обработку. Вы можете отслеживать его на странице заказов.');
    }
    getCars();
  }, [getCars]);

  return (
    <Card>
      <Content>
        <Text>{car.mark}</Text>
        <Title>{car.model}</Title>
      </Content>
      <Text>Цена: {car.price}</Text>
      <Controls>
        <Button onClick={handleOrderButtonClick} text="Заказать" />
      </Controls>
    </Card>
  );
}
