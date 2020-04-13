import palette from '@biocad/bcd-front-ui/colors/palette';
import { ifLight } from '@biocad/educational-common/utils/theme';

import styled from 'styled-components';
import { hideVisually } from 'polished';

export const Container = styled.div`
  display: inline-block;
`;

export const InvisibleLink = styled.a`
  ${hideVisually};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 13px;
  border-radius: 5px;
  padding: 5px;
  border: 0;
  background: transparent;

  ${props =>
    props.disabled
      ? `
      &&& {
        color: ${getColor(props)};
      }
  `
      : `color: ${getColor(props)};`}

  &:hover {
    color: ${props => getHoverColor(props)};
    opacity: ${props => (props.disabled ? 1 : 0.7)};
  }

  &:active {
    background: ${props => getActiveColor(props)};
  }
`;

function getActiveColor(props) {
  if (props.disabled) return 'transparent';
  return ifLight(props, palette['grey-100'], palette['grey-800']);
}

function getColor(props) {
  if (props.disabled) return ifLight(props, palette['grey-200'], palette['grey-700']);
  return ifLight(props, palette['grey-300'], palette['grey-500']);
}

function getHoverColor(props) {
  if (props.disabled) return ifLight(props, palette['grey-200'], palette['grey-700']);
  return ifLight(props, palette['grey-600'], palette['grey-300']);
}
