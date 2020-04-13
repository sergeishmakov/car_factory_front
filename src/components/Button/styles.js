import styled from 'styled-components';
import palette from '../../colors/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Container = styled.button`
  outline: none;
  background: ${(props) => (props.disabled ? palette['grey-300'] : palette.electricViolet)};
  color: white;
  border-radius: 5px;
  border: 0;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => (props.disabled ? 'none' : `0 1px 3px ${palette['grey-600']}`)};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin: 0 5px;
`;
