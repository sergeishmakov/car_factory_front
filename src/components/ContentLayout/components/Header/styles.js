import styled from 'styled-components';
import palette from '../../../../colors/palette';

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background: ${palette.electricViolet};
  flex: 0 1 auto;
  padding: 0 30px;
`;

export const Logo = styled.div`
  color: white;
  font-weight: bold;
  font-size: 25px;
  flex: 0 1 200px;
`;
