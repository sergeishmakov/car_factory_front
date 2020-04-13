import ReactDOM from 'react-dom';
import App from './scenes';
import { GlobalStyle } from './styles';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.querySelector('#root')
);
