import styled from 'styled-components';

const pictureUrl = 'https://i.pinimg.com/originals/e6/3e/cf/e63ecf22c6b39aac7302922697164001.jpg'

export const Container = styled.div`
  height: 300px;
  width: 100%;
  background: url(${pictureUrl}) center/cover no-repeat;

  margin-bottom: 50px
`;