import { useCallback } from 'react';

import { Title, Container, OfferContainer, State, Line, Row } from './styles';
import { AcceptButton, DenyButton } from '../../../Admin/components/Orders/components/Order/styles';
import { acceptOfferApi, denyOfferApi } from '../../../../api/offers';

export function Offers({ offers, getData }) {
  const handleAccept = useCallback(async (id) => {
    await acceptOfferApi(id);
    getData();
  }, []);

  const handleDeny = useCallback(async (id) => {
    await denyOfferApi(id);
    getData();
  }, []);

  return (
    <Container>
      {offers.length ? <p>Предложения:</p> : null}
      {offers.map((offer) => (
        <OfferContainer key={offer.id}>
          <Row>
            <Title>{`${offer.car.mark} ${offer.car.model}`}</Title>
          </Row>
          <Row>
            <AcceptButton disabled={offer.state === 'closed'} text="Принять" onClick={() => handleAccept(offer.id)} />
            <DenyButton disabled={offer.state === 'closed'} text="Отклонить" onClick={() => handleDeny(offer.id)} />
          </Row>
          {offer.state === 'closed' ? <Line /> : null}
        </OfferContainer>
      ))}
    </Container>
  );
}
