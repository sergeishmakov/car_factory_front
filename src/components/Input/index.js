import { useCallback, useState } from 'react';
import pick from 'lodash/pick';
import { FormErrorLabel } from '../FormErrorLabel';
import { BaseInput, Container, ShowIcon, Controls } from './styles';
import { createFormField } from '../../utils/create-form-field';

const PropsWhiteList = Object.freeze(['className', 'name', 'onChange', 'value', 'error', 'placeholder']);

export function Input(props) {
  const [show, setShow] = useState(false);
  const { touched, error, valid, type } = props;

  const clearProps = pick(props, PropsWhiteList);

  const showToggle = useCallback(() => setShow(!show), [show]);

  return (
    <Container>
      <BaseInput valid={touched ? valid : undefined} type={getType(type, show)} {...clearProps} />
      {type === 'password' ? <ShowIcon show={show} onClick={showToggle} /> : null}
      {touched && error ? <FormErrorLabel text={error} /> : null}
    </Container>
  );
}

function getType(type, show) {
  if (type === 'password') return show ? 'text' : 'password';
  return type;
}

export const FormInput = createFormField(Input);
