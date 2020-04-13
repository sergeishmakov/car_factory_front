import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`;
