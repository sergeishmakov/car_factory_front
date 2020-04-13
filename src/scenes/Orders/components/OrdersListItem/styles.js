// Icon, Container, DeleteButton, Title, Description, Content, Controls
import styled from 'styled-components';
import { Button } from 'Components/Button';
import palette from 'Colors/palette';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const OrderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid ${palette['grey-300']};
  margin: 15px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.p`
  font-size: 24px;
  margin: 0;
`;

export const Description = styled.p`
  margin: 0 10px;
  font-size: 18px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 10px 0 0;
  border-radius: 50%;
  background: ${(props) => getIconColor(props)};
`;

export const Line = styled.div`
  height: 1px;
  background: ${palette.black};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
`;

function getIconColor(props) {
  if (props.success) return palette.green;
  return palette['grey-300'];
}

export const DeleteButton = styled(FontAwesomeIcon).attrs({ icon: faTrashAlt })`
  color: ${palette['grey-400']};
  margin: 0 10px;
  cursor: pointer;

  &:hover {
    color: ${palette['grey-600']};
  }
`;
