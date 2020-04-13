import { useCallback, useState } from 'react';
import pick from 'lodash/pick';
import { FormErrorLabel } from '../FormErrorLabel';
import { TextEditor, Container } from './styles';
import { createFormField } from '../../utils/create-form-field';

const PropsWhiteList = Object.freeze(['className', 'name', 'type', 'error', 'placeholder']);

export function Textarea(props) {
  const { touched, error, valid, value, onChange } = props;
  const [text, setText] = useState(TextEditor.createValueFromString(value, 'html'));
  const clearProps = pick(props, PropsWhiteList);

  const handleChange = useCallback(
    value => {
      setText(value);
      onChange(value.toString('html'));
    },
    [onChange]
  );

  return (
    <Container>
      <TextEditor valid={touched ? valid : undefined} value={text} onChange={handleChange} {...clearProps} />
      {touched && error ? <FormErrorLabel text={error} /> : null}
    </Container>
  );
}

export const FormTextarea = createFormField(Textarea);
