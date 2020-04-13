import { Title, Container, OfferContainer, State, Line } from './styles';

export function Offers({ offers }) {
  return (
    <Container>
      {offers.length ? <p>Предложения:</p> : null}
      {offers.map((offer) => (
        <OfferContainer key={offer.id}>
          <Title>{`${offer.car.mark} ${offer.car.model}`}</Title>
          <State>{getText(offer)}</State>
          {offer.state === 'closed' ? <Line /> : null}
        </OfferContainer>
      ))}
    </Container>
  );
}

function getText(offer) {
  const { state, progress } = offer;
  if (state !== 'closed') return 'Предложение рассматривается';
  if (progress === 'accepted') return 'Предложение принято';
  return 'Предложение отклонено';
}
