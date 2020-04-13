import { useField } from 'react-final-form';

export function useFieldValue(fieldName) {
  return useField(fieldName, { subscription: { value: true } }).input.value;
}
