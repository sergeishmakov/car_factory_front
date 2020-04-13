import styled from 'styled-components';
import palette from 'Colors/palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 50px;
`;

export const OfferContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${palette['grey-300']};
  position: relative;
`;

export const Title = styled.li`
  margin: 5px 0;
`;

export const State = styled.div``;

export const Line = styled.div`
  height: 1px;
  background: ${palette.black};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
`;
