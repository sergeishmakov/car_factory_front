import styled from 'styled-components';
import palette from '../../colors/palette';

export const Container = styled.div`
  margin: auto;
  border: 1px solid ${palette['grey-300']};
  border-radius: 8px;
  width: 500px;
  padding: 20px;
`;

export const Title = styled.h2`
  color: ${palette.electricViolet};
  text-align: center;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
`;
