import React, { useCallback } from 'react';
import SelectUi from 'react-select';
import { createFormField } from 'Utils/create-form-field';
import { ErrorLabel } from '../ErrorLabel';
import palette from '../../colors/palette';

function getValue(value, options, isMulti) {
  if (!value) return undefined;
  if (isMulti && Array.isArray(value))
    return options.filter((option) => value.some((item) => item.value === option.value));
  return options.find((option) => option.value === value);
}

function getOutputValue(fieldValue, isMulti) {
  if (!fieldValue) return undefined;
  if (isMulti && Array.isArray(fieldValue)) return fieldValue.map((item) => item.value);
  return fieldValue.value;
}

export function Select({
  value: inputValue,
  options,
  onChange,
  onInputChange,
  className,
  customStyles,
  isMulti = false,
  touched,
  valid,
  error,
}) {
  const value = getValue(inputValue, options, isMulti);

  const handleChange = useCallback((fieldValue) => onChange(getOutputValue(fieldValue, isMulti)), [isMulti, onChange]);

  const defaultCustomStyles = {
    control: (base) => ({
      ...base,
      fontSize: '14px',
      border: `1px solid ${getBorderColor(touched ? valid : undefined)}`,
    }),
    menuList: (base) => ({ ...base, fontSize: '14px' }),
  };

  return (
    <div>
      <SelectUi
        className={className}
        value={value}
        options={options}
        styles={customStyles || defaultCustomStyles}
        onChange={handleChange}
        onInputChange={onInputChange}
        isMulti={isMulti}
      />
      {touched ? <ErrorLabel>{error}</ErrorLabel> : null}
    </div>
  );
}

function getBorderColor(valid) {
  if (valid === true) return palette.green;
  if (valid === false) return palette.red;
  return null;
}

export const SelectF = createFormField(Select);
