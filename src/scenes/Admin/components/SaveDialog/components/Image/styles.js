import styled from 'styled-components';
import palette from '../../../../../../colors/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons/faCamera'

export const ImageBase = styled.div`
  display: flex;
  background: url(${props => props.src}) center/cover no-repeat;
  width: 80%;
  height: 180px;
  border: 1px solid ${palette['grey-300']};
`;

export const Icon = styled(FontAwesomeIcon).attrs({icon: faCamera})`
  font-size: 50px;
  color: ${palette['grey-300']};
  margin: auto;
`;