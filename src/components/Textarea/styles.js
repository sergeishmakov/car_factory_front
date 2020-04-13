import styled from 'styled-components';
import palette from '../../colors/palette'
import RichTextEditor from 'react-rte';

export const TextEditor = styled(RichTextEditor)`
  &&{
    border: 1px solid ${props => getBorderColor(props)};
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
      border: 1px solid ${palette.electricViolet};
    }
  }
`;

export const BaseInput = styled.input`
  outline: none;
  width: 100%;
  border: 0;
  border: 1px solid ${props => getBorderColor(props)};
  min-height: 36px;
  max-height: 36px;
  padding-left: 10px;
  border-radius: 8px;

  &:focus{
    border: 1px solid ${palette['blue-200']};
  }
`;

function getBorderColor(props) {
  if (props.valid === true) return palette.green;
  if(props.valid === false) return palette.red;
  return palette['grey-300']
}

export const Container = styled.div`
  width: 100%;
`;
