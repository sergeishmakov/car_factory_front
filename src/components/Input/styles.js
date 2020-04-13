import styled from 'styled-components';
import palette from '../../colors/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export const ShowIcon = styled(FontAwesomeIcon).attrs(({ show }) => ({ icon: show ? faEyeSlash : faEye }))`
  display: none;
  cursor: pointer;
  color: ${palette['grey-300']};
  position: absolute;
  font-size: 15px;
  right: 10px;
  top: -20px;

  &:hover {
    color: ${palette['grey-500']};
  }
`;

export const BaseInput = styled.input`
  outline: none;
  width: 100%;
  border: 1px solid ${(props) => getBorderColor(props)};
  min-height: 36px;
  max-height: 36px;
  padding-left: 10px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    border: 1px solid ${palette.electricViolet};
  }

  &:focus {
    border: 1px solid ${palette['blue-200']};

    & + ${ShowIcon} {
      display: block;
    }
  }
`;

function getBorderColor(props) {
  if (props.valid === true) return palette.green;
  if (props.valid === false) return palette.red;
  return palette['grey-300'];
}

export const Container = styled.div`
  width: 100%;
  position: relative;
`;
