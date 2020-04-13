import styled from 'styled-components';
import palette from 'Colors/palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0;
`;

export const DialogControls = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  width: 100%;

  & > button {
    margin: 0 10px;
  }
`;
