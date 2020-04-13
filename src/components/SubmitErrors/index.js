import { Container } from './styles';

export function SubmitErrors({ errors }) {
  if (!errors) return null;
  if (Array.isArray(errors))
    return (
      <Container>
        {errors.map((error) => (
          <p>{error}</p>
        ))}
      </Container>
    );
  return <Container>{errors}</Container>;
}
