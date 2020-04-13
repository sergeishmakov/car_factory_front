import { useContext, useCallback, useState } from 'react';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'Components/Button';

import { DataContext } from '../../contexts';
import { SaveDialog } from '../SaveDialog';
import { ListItem } from './components/ListItem';
import { Grid, Container, Toolbar } from './styles';

export function CarsTable() {
  const [opened, setOpened] = useState(false);
  const { cars } = useContext(DataContext);

  const handleCreateDialogOpen = useCallback(() => setOpened(true), []);

  const handleCreateDialogClose = useCallback(() => setOpened(false), []);

  return (
    <Container>
      <Toolbar>
        <Button icon={faPlus} onClick={handleCreateDialogOpen} text="Добавить" />
      </Toolbar>
      {cars.length ? (
        <Grid>
          {cars.map((car) => (
            <ListItem key={car.id} car={car} />
          ))}
        </Grid>
      ) : (
        <h2>Список пуст</h2>
      )}
      <SaveDialog opened={opened} onClose={handleCreateDialogClose} />
    </Container>
  );
}
