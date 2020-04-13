import { useCallback, useContext, useState } from 'react';
import { Card } from 'Components/Card';
import { Button } from 'Components/Button';

import { SaveDialog } from '../../../SaveDialog';
import { DataContext } from '../../../../contexts';
import { Controls, Content, Title, Text } from './styles';

export function ListItem({ car }) {
  const [opened, setOpened] = useState(false);
  const { deleteCar } = useContext(DataContext);

  const handleEditButtonClick = useCallback(() => {
    setOpened(true);
  }, []);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleDeleteButtonClick = useCallback(() => deleteCar(car.id), []);

  return (
    <Card>
      <Content>
        <Text>{car.mark}</Text>
        <Title>{car.model}</Title>
      </Content>
      <Text>Цена: {car.price}</Text>
      <Controls>
        <Button onClick={handleEditButtonClick} text="Редактировать" />
        <Button onClick={handleDeleteButtonClick} text="Удалить" />
      </Controls>
      <SaveDialog opened={opened} onClose={handleClose} car={car} />
    </Card>
  );
}
