// import {Container, Label, Controls, DownloadButton, RemoveButton} from './styles';
import styled from 'styled-components';
import palette from '../../../../colors/palette';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    background: ${palette['grey-100']};
  }
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: bold;
  width: 100%;
  margin: 0;
  color: ${palette.electricViolet};
`;

export const Controls = styled.div`
  display: flex;
`;

export const DownloadButton = styled.div`
  width: 20px;
  height: 20px;
  background: green;
`;

export const RemoveButton = styled.div`
  width: 20px;
  height: 20px;
  background: red;
`;