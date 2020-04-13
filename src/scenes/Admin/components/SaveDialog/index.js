import { useCallback, useContext } from 'react';
import { Form, Field } from 'react-final-form';

import { Dialog } from '../../../../components/Dialog';
import { FieldGroup } from '../../../../components/FieldGroup';
import { FormInput } from '../../../../components/Input';
import { Button } from '../../../../components/Button';
import { DataContext } from '../../contexts';
import { Title, Controls } from './styles';

export function SaveDialog({ opened, onClose, car }) {
  const { createCar, updateCar } = useContext(DataContext);

  const handleSubmit = useCallback(async (values) => {
    const perform = car ? updateCar : createCar;
    return await perform(values).then(onClose);
  }, []);

  return (
    <Dialog opened={opened} onClose={onClose}>
      <Title>{car ? 'Редактирование' : 'Добавление'} автомобиля</Title>
      <Form onSubmit={handleSubmit} initialValues={car}>
        {({ handleSubmit, submitting, pristine, form }) => (
          <form onSubmit={(e) => handleSubmit(e)?.then(form.reset)}>
            <FieldGroup verticalMargin="10px" label="Марка автомобиля">
              <Field name="mark" placeholder="Введите марку автомобиля" component={FormInput} />
            </FieldGroup>

            <FieldGroup verticalMargin="10px" label="Модель">
              <Field name="model" placeholder="Введите модель" component={FormInput} />
            </FieldGroup>

            <FieldGroup verticalMargin="10px" label="Цена">
              <Field name="price" placeholder="Введите цену" component={FormInput} />
            </FieldGroup>

            <FieldGroup verticalMargin="10px" label="В наличии">
              <Field
                name="inStock"
                type="number"
                placeholder="Введите сколько автомобиле есть в наличии"
                component={FormInput}
              />
            </FieldGroup>

            <Controls>
              <Button disabled={submitting || pristine} type="submit" text={car ? 'Сохранить' : 'Создать'} />
            </Controls>
          </form>
        )}
      </Form>
    </Dialog>
  );
}
