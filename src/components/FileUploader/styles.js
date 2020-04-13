import styled from 'styled-components';
import palette from '../../colors/palette';

export const Dropzone = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid ${palette['grey-300']};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: 0.3s;
  outline: none;

  &:focus {
    outline: none;
  }

  &:hover {
    border: 1px solid ${palette.electricViolet};
  }
`; 

export const Container = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const Input = styled.input`
  outline: none;

  &&:focus {
    outline: none;
  }
`;