import styled from 'styled-components';

export const Grid = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Toolbar = styled.div`
  display: flex;
  align-items: center;
`;
