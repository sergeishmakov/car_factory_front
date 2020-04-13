import styled from 'styled-components';
import { Card } from '../../../../components/Card';

export const Controls = styled.div`
  display: flex;
  margin: 10px 0;

  & > button {
    margin-right: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin: 5px 0;
`;

export const Text = styled.p`
  margin: 0;
`;
