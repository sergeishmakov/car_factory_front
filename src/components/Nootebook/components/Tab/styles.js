import styled from 'styled-components';
import palette from '../../../../colors/palette';

export const Container = styled.p`
  cursor: pointer;
  border-bottom: 2px solid ${({ checked }) => (checked ? palette.electricViolet : 'transparent')};
  margin: 0 20px 0 0;
`;
