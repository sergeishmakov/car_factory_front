import styled from 'styled-components';
import palette from '../../../../colors/palette';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  width: 100%;
  background: ${palette.electricViolet};
  flex: 0 1 auto;
  padding: 40px;
  color: white;
`;
