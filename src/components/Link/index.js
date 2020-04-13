import { useRouteMatch, Link as RouterLink } from "react-router-dom";
import {Container} from './styles'

export function Link({to, activeOnlyWhenExact, className, children, label}){

  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return  <Container className={match ? `${className} --active` : className}>
  <RouterLink to={to}>{label || children}</RouterLink>
</Container>
}