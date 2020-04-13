import styled from 'styled-components';
import { rgba } from 'polished';
import palette from '../../colors/palette';

export const Container = styled.li`
  border: 1px solid ${palette.red};
  background: ${rgba(palette.red, 0.3)};
  color: ${palette.white};
  width: 100%;
  padding: 10px;
  margin: 10px 0;
`;
