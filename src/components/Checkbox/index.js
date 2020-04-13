import { useCallback } from 'react';
import { createFormField } from '../../utils/create-form-field';
import { InvisibleInput, Icon, Label, Container, Placeholder, Row } from './styles';

export function Checkbox(props) {
  const { className, error, checked, label, name, children, placeholder, onChange } = props;

  const handleClick = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <Container className={className} onClick={handleClick}>
      <Row>
        <Icon checked={checked} />
        <Label>{label || children}</Label>
      </Row>
      {placeholder ? <Placeholder>{placeholder}</Placeholder> : null}
      <InvisibleInput name={name} error={error} type="checkbox" checked={checked} />
    </Container>
  );
}

export const FormCheckbox = createFormField(Checkbox);
