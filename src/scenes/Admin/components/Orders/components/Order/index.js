import { useContext, useCallback } from 'react';

import { DataContext } from '../../../../contexts';
import {
  Icon,
  Container,
  Title,
  Description,
  Content,
  Controls,
  TextWrapper,
  InStock,
  AcceptButton,
  DenyButton,
  OfferButton,
  Line,
} from './styles';

export function Order({ order, onOpen }) {
  const {
    car: { mark, model, inStock },
    user: { fullName, login },
    state,
  } = order;

  const { onAccept, onDeny } = useContext(DataContext);

  const handleAcceptButtonClick = useCallback(() => {
    onAccept(order.id);
  });

  const handleDenyButtonClick = useCallback(() => {
    onDeny(order.id);
  });
  console.log(state, 'closed', state === 'closed');
  return (
    <Container>
      <Content>
        <Icon />
        <TextWrapper>
          <Title>{model}</Title>
          <Description>{mark}</Description>
          <InStock inStock={+inStock}>{+inStock ? `Есть в наличии (${inStock})` : 'Нет в наличии'}</InStock>
          <Description>
            от: <b>{fullName || login}</b>
          </Description>
        </TextWrapper>
      </Content>
      <Controls>
        {+inStock ? (
          <>
            <AcceptButton text="Принять" onClick={handleAcceptButtonClick} />
            <DenyButton text="Отказать" onClick={handleDenyButtonClick} />
          </>
        ) : (
          <OfferButton disabled={state === 'closed'} text="Предложить" onClick={onOpen} />
        )}
      </Controls>
      {state === 'closed' ? <Line /> : null}
    </Container>
  );
}
