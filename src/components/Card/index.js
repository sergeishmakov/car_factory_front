import { Container } from './styles';

export function Card({ children, className }) {
  return <Container className={className}>{children}</Container>;
}
