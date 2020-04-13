import styled from 'styled-components';
import palette from 'Colors/palette';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-bottom: 1px solid ${palette['grey-300']};
  position: relative;
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

export const InStock = styled.p`
  font-style: italic;
  color: ${(props) => (props.inStock ? palette.green : palette.red)};
  font-size: 14px;
  margin: 0 20px;
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

function getIconColor(props) {
  if (props.success) return palette.green;
  return palette['grey-300'];
}

const Button = styled.button.attrs(({ text }) => ({ children: text }))`
  margin: 0 5px;
  border: 0;
  font-size: 16px;
  text-transform: uppercase;
  background: transparent;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 1;
    color: ${palette['grey-400']};
  }
`;

export const AcceptButton = styled(Button)`
  color: ${palette.green};
`;

export const DenyButton = styled(Button)`
  color: ${palette.red};
`;

export const OfferButton = styled(Button)`
  color: ${palette.orange};
`;

export const Line = styled.div`
  height: 1px;
  background: ${palette.black};
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
`;
