export function required(value, _, message = 'Это поле является обязательным') {
  if (value) return undefined;
  return message;
}

export function multipleRequired(value, _, message = 'Это поле является обязательным') {
  if (!value) return message;
  if (Array.isArray(value) && value.length) return undefined;
  return undefined;
}
