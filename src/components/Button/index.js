import { Container, Icon } from './styles';

export function Button({ className, disabled, icon, type = 'button', onClick, text, children }) {
  return (
    <Container type={type} className={className} disabled={disabled} onClick={onClick}>
      {icon ? <Icon icon={icon} /> : null}
      {text}
      {children}
    </Container>
  );
}
