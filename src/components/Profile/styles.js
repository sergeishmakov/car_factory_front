import styled from 'styled-components';
import palette from '../../colors/palette';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 0 1 400px;
`;

export const Button = styled.button`
  outline: none;
  background: none;
  border: 0;
  text-transform: uppercase;
  color: ${palette.white};
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

export const Text = styled.p`
  color: ${palette.white};
`;

export const Login = styled.a`
  font-weight: bold;
  margin: 15px 10px;
  color: ${palette.white};
`;
