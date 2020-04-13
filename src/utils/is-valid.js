export function isValid(props) {
  const { getValid, touched, valid, invalid, value } = props;
  if (getValid) return getValid({ touched, valid, invalid, value });
  return touched ? valid : undefined;
}