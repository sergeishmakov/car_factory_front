import { useState, useEffect, useCallback } from 'react';
import { ContentLayout } from 'Components/ContentLayout';
import { getUserCarsApi } from 'Api/cars';

import { ListItem } from './components/ListItem';
import { Container, Grid } from './styles';

export default function Catalog() {
  const [cars, setCars] = useState([]);

  const getCars = useCallback(() => {
    getUserCarsApi().then(setCars);
  }, []);

  useEffect(() => {
    getCars();
  }, []);

  return (
    <ContentLayout>
      <Container>
        {cars.length ? (
          <Grid>
            {cars.map((car) => (
              <ListItem key={car.id} car={car} getCars={getCars} />
            ))}
          </Grid>
        ) : (
          <h2>Список пуст</h2>
        )}
      </Container>
    </ContentLayout>
  );
}
