import styled from 'styled-components';

export const Container = styled.div`
  width: ${({fullWidth}) => fullWidth ? '100%' : '100%'};
  margin: ${({verticalMargin}) => verticalMargin || '20px'} 0;
`;

export const Label = styled.p`
  margin: 0;
`;