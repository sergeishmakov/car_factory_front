import styled from 'styled-components';
import { Card as CardUi } from 'Components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import palette from '../../../../colors/palette';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 40px;
  height: 300px;
  width: 100%;
`;

export const Card = styled(CardUi)`
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 70px;
  color: ${palette.electricViolet};
  opacity: 0.1;
`;
