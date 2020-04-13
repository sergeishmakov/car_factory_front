import {Container, Label} from './styles'

export function FieldGroup({children, label, fullWidth, verticalMargin }){
  return <Container verticalMargin={verticalMargin} fullWidth={fullWidth} >
    <Label>{label}</Label>
      {children}
    </Container>
}