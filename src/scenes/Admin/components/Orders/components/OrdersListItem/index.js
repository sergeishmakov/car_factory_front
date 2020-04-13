import { useCallback, useContext, useState } from 'react';
import { Form, Field } from 'react-final-form';
import { Dialog } from 'Components/Dialog';
import { SelectF } from 'Components/Select';
import { Button } from 'Components/Button';
import { multipleRequired } from 'Utils/form-validation';

import { DataContext } from '../../../../contexts';
import { Offers } from '../Offers';
import { Order } from '../Order';
import { Container, DialogControls } from './styles';

export function ListItem({ order }) {
  const [open, setOpen] = useState(false);

  const { cars, onOffer } = useContext(DataContext);

  const handleSubmit = useCallback(async (values) => {
    await onOffer(values);
    setOpen(false);
  });

  const handleOpen = useCallback(() => {
    setOpen(true);
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  });

  const options = cars
    .filter(({ inStock }) => +inStock)
    .map((car) => ({ value: car.id, label: `${car.mark} ${car.model}` }));

  return (
    <Container>
      <Order order={order} onClose={handleClose} onOpen={handleOpen} />
      <Offers offers={order.offers} />
      <Dialog opened={open} onClose={handleClose}>
        <Form initialValues={{ orderId: order.id }} onSubmit={handleSubmit}>
          {({ handleSubmit, submitting, pristine }) => (
            <>
              <Field name="carId" validate={multipleRequired} options={options} component={SelectF} />
              <DialogControls>
                <Button text="Отмена" onClick={handleClose} />
                <Button text="Выбрать" disabled={submitting || pristine} onClick={handleSubmit} />
              </DialogControls>
            </>
          )}
        </Form>
      </Dialog>
    </Container>
  );
}
