import styled from 'styled-components';
import palette from '../../colors/palette';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 2px 5px ${palette['grey-400']};
  width: 100%;
  min-width: 300px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 10px ${palette['grey-400']};
  }
`;
