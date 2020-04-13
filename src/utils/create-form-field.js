import React from 'react';
import { pick } from 'lodash';
import { getHocDisplayName } from './hoc';

const ProxiedMetaProps = Object.freeze(['valid', 'invalid', 'dirty', 'touched', 'error', 'type']);

export function createFormField(WrappedComponent) {
  const Input = ({ input, meta, ...props }) => (
    <WrappedComponent {...props} {...proxyMetaProps(meta)} {...proxyInputProps(input)} />
  );

  Input.displayName = getHocDisplayName('FinalFormAdapter', WrappedComponent);
  return Input;
}

function proxyMetaProps(meta) {
  return pick(meta, ProxiedMetaProps);
}

function proxyInputProps(input) {
  return input;
}
