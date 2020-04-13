import styled from 'styled-components';
import palette from '../../colors/palette';
import { hideVisually } from 'polished'

export const Icon = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid ${props => props.checked ? palette.electricViolet : palette['grey-300']};
  border-radius: 5px;
  margin: 0 5px 0 0;
  transition: 0.3s;
  background: ${props => props.checked ? palette.electricViolet : 'transparent'};
`;

export const Container = styled.div`
  width: 100%;
  position: relative;
  cursor: pointer;

  &:hover {
    & > div > ${Icon} {
      border: 1px solid ${palette.electricViolet};
    }
  }
`;



export const Label = styled.p`
  margin: 0;
`;

export const Placeholder = styled.p`
  font-size: 12px;
  color: ${palette['grey-400']};
  margin: 0 0 0 25px;

`;

export const InvisibleInput = styled.div`
  ${hideVisually};
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;