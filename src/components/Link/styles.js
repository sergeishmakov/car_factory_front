import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  margin: 5px;
  border-radius: 5px;
  padding: 5px 10px;

  & > a {
    color: white;
    font-size: 18px;
    
    text-transform: uppercase;
    text-decoration: none;
  }

  &.--active {
    background: ${rgba('white', 0.2)};
  }

  &:hover {
    background: ${rgba('white', 0.1)};
  }
`;
